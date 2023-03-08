import React, { useContext } from "react";
import { MyContext } from "../context/Context";
import Gallery_textArea_modal from "./Gallery_textArea_modal";

const Gallery_textArea = ({ props, props2, props3 }) => {
  const { inputRef, crudModal, setCrudModal, setSelectedComment } = useContext(MyContext);

  const setInputRef = (e) => {
    inputRef.current.value = e.target.value;
  };

  // console.log(props3);

  return (
    <>
      <div>
        <figure>
          <img src='../src/img/main/Boeun_png.png' alt='' />
        </figure>
      </div>
      <div>
        <div>
          <p>admin</p>
          <p>{props}</p>
        </div>
        <div>
          <p>{props2}</p>
          {/* <p onClick={(e) => {}}>Reply</p> */}
          <p
            onClick={(e) => {
              setCrudModal(!crudModal);
              setSelectedComment(props3);
            }}>
            더보기
          </p>
        </div>
      </div>
    </>
  );
};
export default Gallery_textArea;
