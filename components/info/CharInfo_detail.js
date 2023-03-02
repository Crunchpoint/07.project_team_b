import React, { useRef, useState } from "react";
import Logo from "./Logo";

import styles from "@/styles/info/CharInfo.module.scss";

const CharInfo_detail = () => {
  return (
    <>
    <div className={styles.app}>
    <Logo className={styles.logo_float}></Logo>
      <div className={`${styles.wrap_app} ${styles.wrap_app_detail}`}>
        <div className={styles.detail_left}>
          <img src="/src/img/info/ponyo/sosuke3.jpg"/>
        </div>
        <div className={styles.detail_right}>
          <p>
            대사
          </p>
          <p>
            성우
          </p>
          <p className={styles.detail_right_path}>
            대충작품에서뭔짓거리하는지설명해줌ㅇㅇ
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default CharInfo_detail