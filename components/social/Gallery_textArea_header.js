import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../context/Context";
import styles from "@/styles/social/Gallery_textArea_header.module.scss";

const Gallery_textArea = ({ props, props2, props3 }) => {
  const { boardCrud, setBoardCrud, selSocialImg } = useContext(MyContext);

  return (
    <>
      <div className={styles.profile_img}>
        <figure>
          <img src={selSocialImg} alt='' />
        </figure>
      </div>
      <div className={styles.contents}>
        <div>
          <p>{props}</p>
          <p>{props3}</p>
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
        </div>
      </div>
    </>
  );
};
export default Gallery_textArea;
