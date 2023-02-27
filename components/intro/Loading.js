import styles from "@/styles/intro/Loading.module.scss";
import { useEffect } from "react";
import { useContext } from "react";
import { MyContext } from "@/components/context/Context";

const Loading = () => {
  const { loadingProgress, setLoadingProgress } = useContext(MyContext);
  useEffect(() => {
    // 데이터 들어오는 시간에 맞춰서 로딩시간 설정.. 수정중
    // const fetchData = async () => {
    //   await new Promise((resolve) => setTimeout(resolve, 3000));
    // };

    const progressInter = setInterval(() => {
      setLoadingProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(progressInter);
          return 100;
        }
        const randomIncrease = Math.floor(Math.random() * 1) + 1;
        return Math.min(prevProgress + randomIncrease, 100);
      });
    }, 15);

    // fetchData();

    return () => {
      clearInterval(progressInter);
    };
  }, []);

  // 로딩 완료시 액션
  if (loadingProgress >= 100) {
    setTimeout(() => {
      setLoadingProgress("done");
    }, 500);
  }

  return (
    <div className={styles.container}>
      <div className={styles.bg} />
      <div className={styles.loading_wrapper} data-isloading={loadingProgress}>
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
