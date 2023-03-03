import React, { useEffect, useRef, useState } from 'react'
import styles from "@/styles/main/Boeun.module.scss"
import Link from 'next/link';

const Boeun = () => {

    const observerRef = useRef([]);
    const [active,setActive] = useState(false);

    useEffect(()=>{

        let observer = new IntersectionObserver(
        ([e]) => {
            if (e.isIntersecting) {
            setActive(true)
            }else{
                setActive(false)
            }
        },
        { threshold: 0.5 }
        );

        if(observerRef.current){
        observer.observe(observerRef.current)
        }
    },[observerRef,active])

  return (
    <div className={`${styles.main_bg} ${active?styles.active:null}`} ref={observerRef}>
        <Link href="/info/charinfo">
          <button className={styles.button}>
            SEE MORE
          </button>
        </Link>
        <div className={styles.main_img}>
            <img className={styles.main_img_01} src="../src/img/main/Boeun_png2.png" alt='사람'/>
            <img className={styles.main_img_02} src="../src/img/main/Boeun_png.png" alt='고양이'/>
        </div>
        <div className={styles.text}>
            <div className={styles.main_text}>The Cat</div>
            <div className={styles.main_text2}>Returns</div>
        </div>
    </div>
  )
}

export default Boeun