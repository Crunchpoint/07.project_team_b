import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useState, createContext, useEffect, useRef } from "react";

const dataUrl = "../src/json/animeName.json";
const dataUrl1 = "../src/json/charDetail.json";
const apiEndpoint = "/api/board";
const apiEndpoint2 = "/api/comment";
const apiEndpoint3 = "/api/user";
const apiEndpoint4 = "/api/like";

const Context = ({ children }) => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [userDb, setUserDb] = useState([]);
  const [board, setBoard] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
  const [comment, setComment] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [crudModal, setCrudModal] = useState(false);
  const [boardCrud, setBoardCrud] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);
  const [selectedContent, setSelectedContent] = useState(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [filteredBoard, setFilteredBoard] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [writeTime, setWriteTime] = useState(null);
  const [filteredComment, setFilteredComment] = useState([]);
  const [selectedComment, setSelectedComment] = useState(null);
  const [selSocialImg, setSelSocialImg] = useState([]);
  const [postModal, setPostModal] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");
  const [selectedValue, setSelectedvalue] = useState("");
  const [pageName, setPageName] = useState("");
  const [like, setLike] = useState([]);
  const [edit, setEdit] = useState(false);
  const inputRef = useRef();
  const user = useSession();

  useEffect(() => {
    setCurrentUser(userDb?.filter((item) => item.email === user.data?.user.email));
  }, [userDb, user.data?.user.email]);

  // axios 데이터
  useEffect(() => {
    async function axiosData() {
      await axios
        .all([axios.get(dataUrl), axios.get(dataUrl1)])
        .then(
          axios.spread((res1, res2) => {
            const combinedData = [...res2.data.cat, ...res2.data.howl, ...res2.data.laputa, ...res2.data.ponyo, ...res2.data.spirit, ...res2.data.totoro];
            setData(res1.data.data);
            setData2(res2.data);
            setData3(combinedData);
          })
        )
        .catch((error) => {
          console.log(error);
        });
    }
    axiosData();
  }, []);

  // user 데이터 통신
  const userFn = async (method, email, name, img, user) => {
    try {
      let data = { email: email, user_name: name, profile_img: img, is_admin: user };
      let response;

      switch (method) {
        case "POST":
          await axios.post(apiEndpoint3, data);
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

      response = await axios.get(apiEndpoint3);
      setUserDb(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    userFn();
  }, []);
  // user 서밋 함수
  const handleUser = (method, user_email, user_name, user_img) => {
    const email = user_email;
    const name = user_name;
    const img = user_img;
    const user = 0;
    userFn(method, email, name, img, user);
  };

  // board 데이터 통신
  const boardFn = async (method, user, content, img, name) => {
    try {
      let data = { user_id: user, content: content, board_img: img, user_name: name };
      let response;

      switch (method) {
        case "POST":
          await axios.post(apiEndpoint, data);
          setPostModal(false);
          break;

        // case "PUT":
        //   await axios.put();
        //   break;

        case "DELETE":
          await axios.delete(apiEndpoint, { data: user });
          setShowModal(false);
          setBoardCrud(false);
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
    boardFn();
  }, []);
  // board 서밋 함수
  const handleSubmit = (e, method, user_name, image_url) => {
    const user = 1;
    const img = image_url;
    const name = user_name;
    const content = e;
    boardFn(method, user, content, img, name);
  };

  // comment 데이터 통신
  const commentFn = async (method, user, board, comment, comment_idx) => {
    try {
      let data = { board_idx: board, user_name: user, _comment: comment, comment_idx: comment_idx };
      let response;

      switch (method) {
        case "POST":
          await axios.post(apiEndpoint2, data);
          break;

        case "PUT":
          await axios.put(apiEndpoint2, { _comment: comment, comment_idx: comment_idx });
          break;

        case "DELETE":
          await axios.delete(apiEndpoint2, { data: user });
          setCrudModal(false);
          break;

        default:
          break;
      }

      response = await axios.get(apiEndpoint2);
      setComment(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    commentFn();
  }, []);
  // comment 서밋 함수
  const handleComment = (e, method, idx, comment_idx) => {
    const user = currentUser[0]?.user_name;
    const board = idx;
    const comment = e;
    commentFn(method, user, board, comment, comment_idx);
  };

  // like 데이터 통신
  const likeFn = async (method, comment_idx, user, is_like) => {
    try {
      let data = { comment_idx: comment_idx, user_name: user, is_like: is_like };
      let response;

      switch (method) {
        case "POST":
          await axios.post(apiEndpoint4, data);
          break;

        case "PUT":
          await axios.put();
          break;

        case "DELETE":
          // await axios.delete(apiEndpoint4 ? (idx = 111 & user) : user);
          await axios.delete(apiEndpoint4, { params: { comment_idx: comment_idx, user_name: user } });
          break;

        default:
          break;
      }
      response = await axios.get(apiEndpoint4);
      setLike(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // console.log(like);
  useEffect(() => {
    likeFn();
  }, []);
  // like 서밋 함수

  const handleLike = (e, method, idx, user_) => {
    const likeCheck = like.filter((item) => item.comment_idx === idx && item.user_name === user_);
    if (likeCheck.length > 0) {
      likeFn("DELETE", idx, user_);
    } else {
      const comment_idx = idx;
      const user = user_;
      const is_like = 1;
      likeFn(method, comment_idx, user, is_like);
    }
  };

  // 시간 계산 함수
  function timeForToday(value) {
    const today = new Date();
    const timeValue = new Date(value);

    const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
    if (betweenTime < 1) return "Now";
    if (betweenTime < 60) {
      return `${betweenTime}m`;
    }

    const betweenTimeHour = Math.floor(betweenTime / 60);
    if (betweenTimeHour < 24) {
      return `${betweenTimeHour}h`;
    }

    const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    if (betweenTimeDay < 365) {
      return `${betweenTimeDay}d`;
    }

    return `${Math.floor(betweenTimeDay / 365)}y`;
  }
  // 유저별 게시판 필터링
  useEffect(() => {
    setFilteredBoard(
      board?.filter((item) => {
        return item.user_name?.toLowerCase().trim().replace("-", "") === pageName?.toLowerCase().trim().replace("-", "");
      })
    );
  }, [board, crudModal, pageName]);

  // 좋아요 기능 // 수정중
  const sessionStorageFn = (key, obj) => {
    if (sessionStorage[key]) {
      sessionStorage.removeItem(key);
    } else {
      sessionStorage.setItem(key, obj);
    }
    setLike(!like);
  };

  const values = {
    data,
    setData,
    data2,
    setData2,
    data3,
    userDb,
    currentUser,
    board,
    comment,
    loadingProgress,
    setLoadingProgress,
    handleSubmit,
    handleComment,
    showModal,
    setShowModal,
    crudModal,
    setCrudModal,
    selectedImg,
    setSelectedImg,
    selectedContent,
    setSelectedContent,
    timeForToday,
    inputRef,
    commentFn,
    boardFn,
    filteredComment,
    setFilteredComment,
    selectedComment,
    setSelectedComment,
    filteredBoard,
    setFilteredBoard,
    edit,
    setEdit,
    sessionStorageFn,
    like,
    setLike,
    selectedValue,
    setSelectedvalue,
    inputValue,
    setInputValue,
    pageName,
    setPageName,
    postModal,
    setPostModal,
    textareaValue,
    setTextareaValue,
    boardCrud,
    setBoardCrud,
    selectedBoard,
    setSelectedBoard,
    writeTime,
    setWriteTime,
    handleUser,
    selSocialImg,
    setSelSocialImg,
    handleLike,
  };

  return <MyContext.Provider value={values}>{children}</MyContext.Provider>;
};

export const MyContext = createContext({});
export default Context;
