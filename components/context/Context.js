import axios from "axios";
import { useRouter } from "next/router";
import React, { useState, createContext, useEffect } from "react";

const dataUrl = "../src/json/animeName.json";
const dataUrl1 = "../src/json/charDetail.json";

const Context = ({ children }) => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [board, setBoard] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);
  const [selectedContent, setSelectedContent] = useState(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const apiEndpoint = "/api/board";

  useEffect(() => {
    async function axiosData() {
      await axios
        .all([axios.get(dataUrl), axios.get(dataUrl1)])
        .then(
          axios.spread((res1, res2) => {
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

  const handleData = async (method, user, img, content) => {
    try {
      event.preventDefault();
      let data = { user_id: user, board_img: img, content: content };
      let response;

      switch (method) {
        case "POST":
          await axios.post(apiEndpoint, data);
          break;

        case "PUT":
          await axios.put();
          break;

        case "DELETE":
          await axios.delete();
          break;

        default:
          break;
      }

      response = await axios.get(apiEndpoint);
      setBoard(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  const handleSubmit = (e, method) => {
    e.preventDefault();

    const user = "1";
    const img = "dd";
    const content = e.target.board.value;
    handleData(method, user, img, content);
  };

  const values = {
    data,
    setData,
    data2,
    setData2,
    board,
    loadingProgress,
    setLoadingProgress,
    handleSubmit,
    showModal,
    setShowModal,
    selectedImg,
    setSelectedImg,
    selectedContent,
    setSelectedContent,
  };

  return <MyContext.Provider value={values}>{children}</MyContext.Provider>;
};

export const MyContext = createContext({});
export default Context;
