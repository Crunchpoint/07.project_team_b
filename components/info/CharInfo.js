import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "@/styles/info/CharInfo.module.scss";

const CharInfo = () => {
  return (
    <>
      <div className={styles.app}>
        <div className={styles.wrap_logo}>
          <button>logo</button>
        </div>
        <div className={styles.wrap_info}>
          <h1 className={styles.h1}>11111</h1>
          <div>
          <Swiper className={`${styles.body} ${styles.swiper}`}>
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
          </div>
        </div>
      </div>
    </>
  )
}

export default CharInfo