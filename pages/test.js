import React, { useRef, useState } from "react";
import styled from "styled-components";

const UploadImage = () => {
  const [image, setImage] = useState("");

  const imageUploader = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", process.env.NEXT_PUBLIC_UPLOAD_PRESET);
    data.append("api_key", process.env.NEXT_PUBLIC_API_KEY);
    const cloudName = process.env.NEXT_PUBLIC_CLOUD_NAME;

    const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/upload`, {
      method: "POST",
      body: data,
    });
    return res.json();
  };

  const inputRef = useRef(null);

  const imageUploadBtn = () => {
    inputRef.current.click();
  };
  const fileChange = async (e) => {
    const uploaded = await imageUploader(e.target.files[0]);
    setImage(uploaded.url);
  };
  return (
    <div>
      {image ? <img src={image}></img> : <p>대표 사진을 업로드 해주세요</p>}
      <input ref={inputRef} type='file' accept='image/*' onChange={fileChange} />
      <button onClick={imageUploadBtn}>이미지 업로드</button>
    </div>
  );
};

// const PhotoUpload = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   height: 150px;
//   input {
//     display: none;
//   }
//   button {
//     margin: 10px 0;
//     width: 100px;
//     height: 30px;
//     border-radius: 10px;
//     background-color: ${({ theme }) => theme.colors.LIGHT_GREY};
//   }
// `;
// const Box =
//   styled.div <
//   Box >
//   `
//   background: center url(${(props) => props.url});
//   background-size: contain;
//   width: 100px;
//   height: 120px;
//   padding: 10px;
// `;

export default UploadImage;
