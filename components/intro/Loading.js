import styles from "@/styles/intro/Loading.module.scss";
import { useState, useEffect } from "react";

const Loading = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // 데이터 들어오는 시간에 맞춰서 로딩시간 설정.. 수정중
    // const fetchData = async () => {
    //   await new Promise((resolve) => setTimeout(resolve, 3000));
    // };
    // fetchData();
    const intervalId = setInterval(() => {
      setLoadingProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(intervalId);
          return 100;
        }
        const randomIncrease = Math.floor(Math.random() * 1) + 1;
        return Math.min(prevProgress + randomIncrease, 100);
      });
    }, 15);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // 로딩 완료시 액션

  // if (loadingProgress >= 100) {
  //   return null;
  // }

  return (
    <div className={styles.container}>
      <div className={styles.bg} />
      <div className={styles.loading_wrapper}>
        <figure>
          <img src='/src/img/intro/mei.gif' alt='mei' style={{ transform: `scaleX(-1) translate3d(calc(-20vw + -${loadingProgress}vw / 1.8), 0, 0)` }} />
        </figure>
        <div className={styles.loading_bar}>
          <div className={styles.progress_bar} style={{ width: `${loadingProgress}%` }} />
        </div>
        <p>{loadingProgress}% Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
