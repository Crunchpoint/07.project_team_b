import React from "react";
import styles from "@/styles/login/Login.module.scss";
import { signIn, signOut, useSession } from "next-auth/react";

const Google = () => {
  const { data: session } = useSession();

  const { data: session } = useSession();

  if (session) {
    return (
      <button className={styles.google} onClick={() => signOut()}>
        <img className={styles.google_img} src='../src/img/login/google_logo.png' alt='구글로고' />
        <div className={styles.google_text}>Google SignOut</div>
      </button>
    );
  }

  if (session) {
    return <div>You are already signed in!</div>;
  }

  return (
    <button className={styles.google} onClick={() => signIn()}>
      <img className={styles.google_img} src='../src/img/login/google_logo.png' alt='구글로고' />
      <div className={styles.google_text}>구글로 쉬운시작</div>
    </button>
  );
};

export default Google;
