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
  const { data2 } = useContext(MyContext);
  const ani_name = router.query.ani_name;
  const _data = data2[`${ani_name}`];
  const ani_list = Object.keys(data2);

  // 로딩 지연
  useEffect(() => {
    setTimeout(() => {
      // location.reload();
    }, 10);
  }, []);

  // console.log(router);

  var changeOption = (e) => {
    var name = e.target.value;
    location.replace(`/info/charinfo?ani_name=${name}`);
  };

  function sendData(obj) {
    router.push({
      pathname: "/info/charinfo_detail",
      query: {
        ani_name: router.query.ani_name,
        name: obj.name_eng,
        data: JSON.stringify(obj),
      },
      asPath: "/info/charinfo_detail",
    });
  }

  var changeOption = (e) => {
    var name = e.target.value;
    location.replace(`/info/charinfo?ani_name=${name}`);
  };

  return (
    <div className={styles.app_info}>
      <div className={styles.wrap_app}>
        <Logo></Logo>
        <div className={styles.wrap_info}>
          <h1 className={styles.h1}>
            <p className={styles.h1_text1}>Who is your favorite</p>
            <p className={styles.h1_text2}>Character?</p>
          </h1>

          {/* onchanged 설정 */}
          <div>
            <select id='aniSelect' className={styles.aniSelect} onChange={changeOption}>
              {ani_list.map((e) => {
                if (e == ani_name) {
                  return (
                    <option defaultValue value={e} key={e}>
                      {e}
                    </option>
                  );
                } else {
                  return (
                    <option value={e} key={e}>
                      {e}
                    </option>
                  );
                }
              })}
            </select>
          </div>
          <div>
            <div className={styles.swiper}>
              {_data &&
                _data.map((obj, key) => {
                  return (
                    <div key={key} className={`${styles.swiper_slide}`}>
                      <div className={styles.swiper_slide_detail} onClick={() => sendData(obj)}>
                        <div className={styles.detail_img}>
                          <img src={`${obj.src}`}></img>
                        </div>
                        <div className={styles.detail_text}>
                          <p className={styles.text_eng}>{`${obj.name_eng}`}</p>
                          <p className={styles.text_jap}>{`${obj.name_jap}`}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharInfo;
