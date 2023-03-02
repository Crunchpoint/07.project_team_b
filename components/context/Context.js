import axios from "axios";
import { useRouter } from "next/router";
import React, { useState, createContext, useEffect } from "react";

const dataUrl = "../src/json/animeName.json";
const dataUrl1 = "../src/json/charDetail.json";

const Context = ({ children }) => {
  const [data, setData] = useState([]);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const router = useRouter();
  const apiEndpoint = "/api";

  useEffect(() => {
    async function axiosData() {
      await axios
        .all([axios.get(dataUrl), axios.get(dataUrl1)])
        .then(
          axios.spread((res1, res2) => {
            setData(res1.data.data);
            console.log(res2);
          })
        )
        .catch((error) => {
          console.log(error);
        });
    }
    axiosData();
  }, []);

  const handleData = async (queryNo, method, title, name, postData, time) => {
    try {
      event.preventDefault();
      let data = { no: queryNo, title: title, name: name, contents: postData, time: time };
      let response;
      //  need to add api endpoint and data
      switch (method) {
        case "POST":
          await axios.post(apiEndpoint);
          break;

        case "PUT":
          await axios.put(apiEndpoint);
          break;

        case "DELETE":
          await axios.delete(apiEndpoint);
          break;

        default:
          break;
      }

      response = await axios.get(apiEndpoint);
      setData(response.data);
      // router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  // const handleSubmit = (e, method, queryNo) => {
  //   e.preventDefault();
  //   const title = e.target.subject.value;
  //   const name = e.target.author.value;
  //   const postData = e.target.textArea.value;
  //   const time = Date.now().toString();
  //   handleData(queryNo, method, title, name, postData, time);
  // };

  // useEffect(() => {
  //   handleData();
  // }, []);

  const values = { data, setData, loadingProgress, setLoadingProgress };
  return <MyContext.Provider value={values}>{children}</MyContext.Provider>;
};

export const MyContext = createContext({});
export default Context;
