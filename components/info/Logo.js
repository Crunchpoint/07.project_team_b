import React from "react";
import Swal from "sweetalert2";
import styles from "@/styles/info/CharInfo.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const Logo = () => {
  const router = useRouter();
  const { data: sessionData } = useSession();

  const handleButtonClick = (title) => {
    Swal.fire({
      title: title,
      width: 600,
      padding: "2em",
      color: "#716add",
      backdrop: `
        rgba(0,0,0,0.4)
        left top
        no-repeat
      `,
    });
  };

  return (
    <div className={styles.wrap_logo}>
      <button className={styles.btn1} onClick={() => handleButtonClick("자세히 알고싶은 캐릭터를 클릭해주세요😄")}>
        캐릭터 알아보기
      </button>
      <button className={styles.btn2} onClick={() => router.push("/main/ghibli")}></button>

      {sessionData?.user ? (
        <Link href={`/social/${sessionData.user?.name?.toLowerCase()}`}>
          <button className={styles.btn3}>SNS 바로가기</button>
        </Link>
      ) : (
        <Link href='/login/login'>
        <button className={styles.btn3} onClick={() => handleButtonClick("로그인이 필요해요")}>
          SNS 바로가기
        </button>
        </Link>
      )}
    </div>
  );
};

export default Logo;
