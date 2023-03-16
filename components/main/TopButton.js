import React, { useEffect, useInsertionEffect, useRef, useState } from "react";
import styles from "@/styles/main/TopButton.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import Swal from "sweetalert2";

const TopButton = () => {
  const router = useRouter();

  function scrollToTop() {
    router.push("/main/ghibli");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  const { data, status } = useSession();

  const handleButtonClick2 = () => {
    Swal.fire({
      title: "로그인이 필요해요",
      width: 600,
      padding: "2em",
      color: "#716add",
      background: "#fff",
      backdrop: `
        rgba(0,0,0,0.4)
        left top
        no-repeat
      `,
    });
  };

  return (
    <>
      {/* <div>
      <button onClick={()=>scrollToTop()} className={styles.top}>
        <img src='../src/img/main/ponyo_png2.png'/>
      </button>
    </div> */}
    <div className={styles.warp_menu_top}>
      <a href='#sectionOne' className={styles.top}>
        <img src='../src/img/main/top_btn.png'/>
      </a>
      <ul className={styles.display}>
        {
          data?.user ? (
            <li onClick={()=>signOut()}>Logout</li>
            ) : (
              <li><Link href='/login/login'>Login</Link></li>
              )
            }
        {
          data?.user ? (
            <li><Link href={`/social/${data?.user.name.toLowerCase()}`}>SNS Page</Link></li>
          ) : (
            <li onClick={handleButtonClick2}><Link href='/login/login'>SNS Page</Link></li>
          )
        }
      </ul>
    </div>
    </>
  );
};

export default TopButton;
