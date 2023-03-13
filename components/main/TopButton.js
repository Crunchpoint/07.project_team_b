import React, { useEffect, useInsertionEffect, useRef, useState } from 'react'
import styles from "@/styles/main/TopButton.module.scss"
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

const TopButton = () => {
  const router = useRouter()

  function scrollToTop() {
    router.push("/main/ghibli")
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }
  const {data, status} = useSession();
  
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
            <li><Link href={`/social/${data?.user.name}`}>Social Page</Link></li>
          ) : (
            <li onClick={()=>alert('로그인이 필요합니다.')}><Link href='/login/login'>Social Page</Link></li>
          )
        }
      </ul>
    </div>
    </>
  )
}

export default TopButton