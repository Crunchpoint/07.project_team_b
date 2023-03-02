import React, { useEffect, useRef, useState } from 'react'
import styles from "@/styles/main/Totoro.module.scss"

const Totoro = () => {

    const observerRef = useRef([]);
    const [active,setActive] = useState(false);

    useEffect(()=>{

        let observer = new IntersectionObserver(
        ([e]) => {
            console.log("e.target", e.target)
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
        <button className={styles.button}>SEE MORE</button>
        <div className={styles.main_img}>
            <img src="../src/img/main/totoro_png.png" alt='센과치히로 행방불명'/>
        </div>
        <div className={styles.text}>
            <div className={styles.main_text}>My</div>
            <div className={styles.main_text2}>Neighbor</div>
            <div className={styles.main_text3}>Totoro</div>
        </div>
    </div>
  )
}

export default Totoro