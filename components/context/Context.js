import axios from "axios";
import { useRouter } from "next/router";
import React, { useState, createContext, useEffect } from "react";

const dataUrl = "../src/json/animeName.json";

const Context = ({ children }) => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const router = useRouter();
  const apiEndpoint = "/api";

  useEffect(() => {
    async function axiosData() {
      await axios
        .all([axios.get(dataUrl)])
        .then(
          axios.spread((res1) => {
            setData(res1.data.data);
            setData2(res2.data);
          })
        )
        .catch((error) => {
          console.log(error);
        });
    }
    axiosData();
  }, []);

  // const handleData = async () => {
  //   try {
  //     event.preventDefault();
  //     let data = {};
  //     let response;
  //     //  need to add api endpoint and data
  //     switch (method) {
  //       case "POST":
  //         await axios.post();
  //         break;

  //       case "PUT":
  //         await axios.put();
  //         break;

  //       case "DELETE":
  //         await axios.delete();
  //         break;

  //       default:
  //         break;
  //     }

  //     response = await axios.get(apiEndpoint);
  //     setData(response.data);
  //     router.push("/");
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   handleData();
  // }, []);

  const values = { data, setData, data2, setData2, loadingProgress, setLoadingProgress };
  return <MyContext.Provider value={values}>{children}</MyContext.Provider>;
};

export const MyContext = createContext({});
export default Context;
