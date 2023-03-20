import React, { useContext, useEffect, useRef, useState } from "react";
import { MyContext } from "../context/Context";
import styles from "@/styles/social/Gallery_textArea.module.scss";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Gallery_textArea = ({ props, props2, props3, props4 }) => {
  const { userDb, boardCrud, setBoardCrud, crudModal, setCrudModal, setSelectedComment, setSelectedvalue, currentUser, handleLike, like } = useContext(MyContext);
  const [userImg, setUserImg] = useState();
  const [count, setCount] = useState([]);
  const [isLike, setIsLike] = useState(false);
  const router = useRouter();

  useEffect(() => {
    let profile_img = userDb?.filter((item) => {
      return item.user_name === props4;
    });
    setUserImg(profile_img[0]?.profile_img);
  }, [userDb, props4]);

  // useEffect(() => {
  //   let likeCount = like?.filter((item) => {
  //     return item.comment_idx === props3;
  //   });
  //   setCount(likeCount.length);
  // }, [like, props3]);

  // useEffect(() => {
  //   let isLike = like?.filter((item) => {
  //     return item.comment_idx === props3 && item.user_name === currentUser[0].user_name;
  //   });
  //   setIsLike(isLike.length > 0 ? true : false);
  // }, [like, props3, currentUser]);

  useEffect(() => {
    const likeCount = like?.filter((item) => item.comment_idx === props3).length;
    setCount(likeCount);

    const isLike = like?.some((item) => item.comment_idx === props3 && item.user_name === currentUser[0].user_name);
    setIsLike(isLike);
  }, [like, props3, currentUser]);

  return (
    <>
      <div className={styles.profile_img}>
        <figure>
          <img src={userImg} alt='' />
        </figure>
      </div>
      <div className={styles.contents}>
        <div>
          <p>{props4}</p>
          <p>{props}</p>
          <p
            onClick={(e) => {
              setBoardCrud(!boardCrud);
            }}>
            <svg aria-label='Comment Options' color='rgb(142, 142, 142)' fill='rgb(142, 142, 142)' height='24' role='img' viewBox='0 0 24 24' width='24'>
              <circle cx='12' cy='12' r='1.5'></circle>
              <circle cx='6' cy='12' r='1.5'></circle>
              <circle cx='18' cy='12' r='1.5'></circle>
            </svg>
          </p>
        </div>
        <div>
          <p>{props2}</p>
          <p>{count} Like</p>
          {currentUser[0]?.user_name.toLowerCase() === props4?.toLowerCase() || currentUser[0]?.is_admin === 1 ? (
            <p
              onClick={(e) => {
                setCrudModal(!crudModal);
                setSelectedvalue(props);
                setSelectedComment(props3);
              }}>
              <svg aria-label='Comment Options' color='rgb(142, 142, 142)' fill='rgb(142, 142, 142)' height='24' role='img' viewBox='0 0 24 24' width='24'>
                <circle cx='12' cy='12' r='1.5'></circle>
                <circle cx='6' cy='12' r='1.5'></circle>
                <circle cx='18' cy='12' r='1.5'></circle>
              </svg>
            </p>
          ) : (
            <p style={{ height: "24px" }} />
          )}
        </div>
      </div>
      <svg className={styles.svg} onClick={(e) => handleLike(e, "POST", props3, props4)} width='15' height='15' viewBox='0 0 44 41.95' version='1.1'>
        <defs />
        <g id='Untitled'>
          <path
            className={isLike ? styles.like__active : styles.like}
            d='M22 39.3L19.95 37.45C16.4167 34.2167 13.5 31.425 11.2 29.075C8.9 26.725 7.06667 24.625 5.7 22.775C4.33333 20.925 3.375 19.25 2.825 17.75C2.275 16.25 2 14.7333 2 13.2C2 10.2 3.00833 7.69167 5.025 5.675C7.04167 3.65833 9.53333 2.65 12.5 2.65C14.4 2.65 16.1583 3.1 17.775 4C19.3917 4.9 20.8 6.2 22 7.9C23.4 6.1 24.8833 4.775 26.45 3.925C28.0167 3.075 29.7 2.65 31.5 2.65C34.4667 2.65 36.9583 3.65833 38.975 5.675C40.9917 7.69167 42 10.2 42 13.2C42 14.7333 41.725 16.25 41.175 17.75C40.625 19.25 39.6667 20.925 38.3 22.775C36.9333 24.625 35.1 26.725 32.8 29.075C30.5 31.425 27.5833 34.2167 24.05 37.45L22 39.3Z'
            // fill="#ffffff"
            stroke='#000000'
            strokeWidth='1'
            strokeLinecap='butt'
            strokeLinejoin='round'
          />
        </g>
      </svg>
    </>
  );
};
export default Gallery_textArea;
