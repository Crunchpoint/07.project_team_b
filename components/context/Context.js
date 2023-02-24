import axios from "axios";
import { useRouter } from "next/router";
import React, { useState, createContext, useEffect } from "react";

const Context = ({ children }) => {
  const [data, setData] = useState([]);
  const router = useRouter();

  const apiEndpoint = "/api";

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

  const values = { data, setData };

  return <MyContext.Provider value={values}>ㄹ호ㅇㄹ{children}</MyContext.Provider>;
};

export const MyContext = createContext({});
export default Context;
