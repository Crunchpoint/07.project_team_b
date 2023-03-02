import React, { useEffect, useRef, useState } from 'react'
import styles from "@/styles/main/TopButton.module.scss"

const TopButton = () => {

  function scrollToTop() {
    console.log('sdfgv');
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }

  return (
    <>
    <div>
      <button onClick={()=>scrollToTop()} className={styles.top}>
        <img src='../src/img/main/ponyo_png2.png'/>
      </button>
    </div>
    </>
  )
}

export default TopButton