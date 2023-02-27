import styles from "@/styles/intro/Hello.module.scss";
import React from "react";
import { useContext } from "react";
import { MyContext } from "@/components/context/Context";
import { useRouter } from "next/router";

const Hello = () => {
  const { loadingProgress } = useContext(MyContext);
  const router = useRouter();

  // 로딩 완료시 액션
  if (loadingProgress === "done") {
    setTimeout(() => {
      router.push("/main/ghibli");
    }, 3000);
  }

  return (
    loadingProgress === "done" && (
      <div className={styles.hello}>
        <div className={styles.text}>Hello</div>
      </div>
    )
  );
};

export default Hello;
