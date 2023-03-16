import React from "react";
import Swal from "sweetalert2";
import styles from "@/styles/info/CharInfo.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const logo = () => {
  const router = useRouter();
  const { data } = useSession();
  // console.log("aaa", router);
  // function sendData(obj) {
  //   router.push({
  //     pathname: '/info/charinfo_detail',
  //     query: {
  //       ani_name: router.query.ani_name,
  //       name: obj.name_eng,
  //       data: JSON.stringify(obj)
  //     },
  //   })
  // }

  const handleButtonClick = () => {
    Swal.fire({
      title: "자세히 알고싶은 캐릭터를 클릭해주세요😄",
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

  const handleButtonClick2 = () => {
    Swal.fire({
      title: "로그인이 필요해요",
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
      <button className={styles.btn1} onClick={handleButtonClick}>
        캐릭터 알아보기
      </button>
      <button
        className={styles.btn2}
        onClick={() => {
          // window.location.href = '/'
          window.location.href = "/main/ghibli";
        }}></button>

      {data?.user ? (
        <Link href={`/social/${data?.user.name.toLowerCase()}`}>
          <button className={styles.btn3}>SNS 바로가기</button>
        </Link>
      ) : (
        <Link href='/login/login'>
          <button onClick={handleButtonClick2} className={styles.btn3}>
            SNS 바로가기
          </button>
        </Link>
      )}
    </div>
  );
};

export default logo;
