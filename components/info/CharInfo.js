import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";

import styles from "@/styles/info/CharInfo.module.scss";

const CharInfo = () => {
  return (
    <div className={styles.app}>
      <div className={styles.wrap_app}>
        <div className={styles.wrap_logo}>
          <button>Ghibli</button>
        </div>
        <div className={styles.wrap_info}>
          <h1 className={styles.h1}>11111</h1>
          <div className={styles.swiper}>
          <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
            slidesPerView: 4,
            centeredSlides: true,

          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className={`${styles.body}, ${styles.info_slider}`}>
            <SwiperSlide className={`${styles.swiper_slide}`}>Slide 1</SwiperSlide>
            <SwiperSlide className={`${styles.swiper_slide}`}>Slide 2</SwiperSlide>
            <SwiperSlide className={`${styles.swiper_slide}`}>Slide 3</SwiperSlide>
            <SwiperSlide className={`${styles.swiper_slide}`}>Slide 4</SwiperSlide>
            <SwiperSlide className={`${styles.swiper_slide}`}>Slide 5</SwiperSlide>
          </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CharInfo