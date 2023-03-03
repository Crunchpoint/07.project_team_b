import React, { useContext, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { EffectCoverflow, Pagination, Scrollbar } from "swiper";
import Logo from "./Logo";
import { MyContext } from "@/components/context/Context";

import styles from "@/styles/info/CharInfo.module.scss";
import { useRouter } from "next/router";

const CharInfo = () => {
  const router = useRouter();
  const {data2} = useContext(MyContext);
  const ani_name = 'laputa';// 임시 이름
  // const ani_name = 'cat';// 임시 이름
  // const ani_name = router.query.ani_name;
  console.log('data2', data2);
  const _data = data2[`${ani_name}`];
  console.log(_data);
  // 로딩 지연
  useEffect(()=> {
    setTimeout(()=> {
      
    }, 1000)
  })

  function sendData(obj) {
    router.push({
      pathname: '/info/charinfo_detail',
      query: {
        name: obj.name_eng, 
        data: JSON.stringify(obj)
      },
      asPath: '/info/charinfo_detail'
    })
  }

  return (
    <div className={styles.app_info}>
      <div className={styles.wrap_app}>
        <Logo>
        </Logo>
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
            {
              _data&&_data.map((obj, key) => {
                return <SwiperSlide className={`${styles.swiper_slide}`}>
                  <div className={`${styles.swiper_slide_detail}`}
                    onClick={()=> 
                      // window.location.href=`/info/charinfo_detail/${key}`
                      // 임시 페이지 이동
                      // window.location.href=`/info/charinfo_detail`
                      sendData(obj)
                    }>
                    <img src={`${obj.src}`}></img>
                    {/* 이미지 src 빈칸이라 임시로 해둔것 */}
                    {/* <img src="/src/img/info/ponyo/sosuke3.jpg"></img> */}
                    <p>{`${obj.name_eng}`} / {`${obj.name_jap}`}</p>
                  </div>
                </SwiperSlide>
              })
            }
          </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CharInfo