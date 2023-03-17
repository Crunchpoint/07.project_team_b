import React, { useEffect } from "react";
import styles from "@/styles/login/Login.module.scss";
import Google from "./Google";
import Kakao from "./Kakao";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Login = () => {
  const { data, status } = useSession();
  const router = useRouter();

  // useEffect(() => {
  //   // console.log(`History Stack: ${window.history.length}`);
  //   if (data?.user) {
  //     router.back();
  //   }
  // }, [data]);

  return (
    <div className={styles.login}>
      <div className={styles.main}>
        <img className={styles.main_img} src='../src/img/login/login_bg.png' alt='토토로' />
        <div className={styles.text}>
          <p className={styles.text_01}>GHIBLI</p>
          <p className={styles.text_02}>studio</p>
          <div className={styles.text_circle}></div>
        </div>
        <div className={styles.button}>
          <Kakao />
          <Google />
        </div>
      </div>
    </div>
  );
};

export default Login;
