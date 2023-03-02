import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { EffectCoverflow, Pagination, Scrollbar } from "swiper";

import styles from "@/styles/info/CharInfo.module.scss";

const CharInfo = () => {
  return (
    <div className={styles.app_info}>
      <div className={styles.wrap_app}>
        <div className={styles.wrap_logo}>
          <button>Ghibli</button>
        </div>
        <div className={styles.wrap_info}>
          <h1 className={styles.h1}>What is your favorite Character?</h1>
          <div className={styles.swiper}>
          <Swiper
          effect={"coverflow"}
          grabCursor={true}
          // centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 0,
            slideShadows: true,
            slidesPerView: 4,
            centeredSlides: true,
          }}
          scrollbar={{draggable: true}}
          // pagination={true}
          modules={[EffectCoverflow, Pagination, Scrollbar]}
          className={`${styles.body}, ${styles.info_slider}`}>
            <SwiperSlide className={`${styles.swiper_slide}`}>
              <div className={`${styles.swiper_slide_detail}`}
                onClick={(obj, key)=> {
                  // window.location.href=`/info/charinfo_detail/${key}`
                  // 임시 페이지 이동
                  window.location.href=`/info/charinfo_detail`
                }}>
                <img src="/src/img/info/ponyo/sosuke3.jpg"></img>
                <p>소스케</p>
              </div>
            </SwiperSlide>
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