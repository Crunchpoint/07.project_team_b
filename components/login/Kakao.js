import React, { useEffect } from "react";
import NextAuth from "next-auth/next";
import styles from "@/styles/login/Login.module.scss";
import { signIn, signOut, useSession } from "next-auth/react";
import login from "@/pages/login";
import { Router } from "next/router";
import { MyContext } from "@/components/context/Context";
import { useContext } from "react";

const Kakao = () => {
  const { handleUser } = useContext(MyContext);

  // const kakaoInit = () => {
  //   if(!window.Kakao.isInitialized()) {
  //     window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
  //   }
  //   return Kakao;
  // }

  // const kakaoLogin = async () => {
  //   const kakao = kakaoInit();
  //   await kakao.Auth.login({
  //     success(res){
  //       console.log(res);
  //       kakao.Auth.setAccessToken(res.access_token);
  //       kakao.API.request({
  //         url:"/v2/user/me",
  //         success(res){
  //           setIsLogin(true);
  //         },
  //         fail(error){
  //           console.log(error);
  //         }
  //       })
  //     },
  //     fail(error){
  //       console.log(error);
  //     }
  //   })
  // }

  //   return (
  //       <button className={styles.kakao} onClick={kakaoLogin}>
  //           <img className={styles.kakao_img} src="../src/img/login/kakao_logo.png" alt='카카오로고'/>
  //           <div className={styles.kakao_text}>카카오로 쉬운시작</div>
  //       </button>
  //   )

  const { data: session } = useSession();

  useEffect(() => {
    session && handleUser("POST", session?.user.email, session?.user.name, session?.user.image);
  }, [session]);

  if (session) {
    return (
      <>
        {/* {session.user?.name}님 반갑습니다 <br />
        <button onClick={() => signOut()}>로그아웃</button> */}
        <button className={styles.kakao} onClick={() => signOut()}>
          <img className={styles.kakao_img} src='../src/img/login/kakao_logo.png' alt='카카오로고' />
          <div className={styles.kakao_text}>Kakao SignOut</div>
        </button>
      </>
    );
  }
  return (
    <>
      {/* 로그인되지 않았습니다 <br />
      <button onClick={() => signIn("kakao")}>로그인</button> */}
      <button className={styles.kakao} onClick={() => signIn("kakao")}>
        <img className={styles.kakao_img} src='../src/img/login/kakao_logo.png' alt='카카오로고' />
        <div className={styles.kakao_text}>카카오로 쉬운시작</div>
      </button>
    </>
  );
};

export default Kakao;
