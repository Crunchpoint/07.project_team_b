import React, { useEffect, useRef, useState } from 'react'
import styles from "@/styles/main/TopButton.module.scss"
import { useRouter } from 'next/router';
import Link from 'next/link';

const TopButton = () => {
  const router = useRouter()

  function scrollToTop() {
    console.log('sdfgv');
    router.push("/main/ghibli")
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }

  return (
    <>
    {/* <div>
      <button onClick={()=>scrollToTop()} className={styles.top}>
        <img src='../src/img/main/ponyo_png2.png'/>
      </button>
    </div> */}
    <div>
      <a href='#sectionOne' className={styles.top}>
        <img src='../src/img/main/ponyo_png2.png'/>
      </a>
    </div>
    </>
  )
}

export default TopButton