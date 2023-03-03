import React, { useEffect, useRef, useState } from 'react'
import styles from "@/styles/main/Ponyo.module.scss"
import Link from 'next/link';

const Ponyo = () => {

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
        <Link href={{
          pathname: "/info/charinfo",
          query: {
            ani_name: "ponyo"
          }
       }}  >
          <button className={styles.button}>
            SEE MORE
          </button>
        </Link>
        <div className={styles.main_img}>
            <img src="../src/img/main/ponyo_png.png" alt='센과치히로 행방불명'/>
        </div>
        <div className={styles.text}>
            <div className={styles.main_text}>Ponyo</div>
            <div className={styles.main_text2}>on the Cliff</div>
            <div className={styles.main_text3}>by the Sea</div>
        </div>
    </div>
  )
}

export default Ponyo