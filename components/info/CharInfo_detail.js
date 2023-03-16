import React, { useContext, useEffect, useRef, useState } from "react";
import Logo from "./Logo";

import styles from "@/styles/info/CharInfo.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";

const CharInfo_detail = () => {
  const router = useRouter();
  const name = router.query.name;
  const str_data = router.query.data;
  const [charName, setCharName] = useState("");
  let data = "";
  if (!str_data || !router.query.data) {
    return;
  } else {
    data = JSON.parse(str_data);
  }

  useEffect(() => {
    if (data.name_eng.includes("/")) {
      setCharName(data.name_eng.split("/")[1]);
    } else {
      setCharName(data.name_eng);
    }
  }, [data]);

  // 로딩 지연
  useEffect(() => {
    setTimeout(() => {}, 1000);
  });

  return (
    <>
      <div className={styles.app}>
        <div className={styles.wrap_back}>
          <button
            onClick={() => {
              window.history.back();
            }}></button>
        </div>
        <Logo className={styles.logo_float}></Logo>
        <div className={`${styles.wrap_app} ${styles.wrap_app_detail}`}>
          <div className={styles.detail_left}>
            {/* <img src="/src/img/info/ponyo/sosuke3.jpg"/> */}
            <img src={data.src} />
            <p>
              {data.name_eng}({data.name_jap})
            </p>
          </div>
          <div className={styles.detail_right}>
            <p>{data.quotes == "" ? <span></span> : `"${data.quotes}"`}</p>
            <p>종 : {data.species}</p>
            <p>성별 : {data.gender}</p>
            <p>나이 : {data.age}</p>
            <p>
              성우 : {data.voice_eng} ({data.voice_jap})
            </p>
            <p className={styles.detail_right_path}>
              <Link href={`/social/${charName}`}>캐릭터 페이지 바로가기 ▶️</Link>
            </p>
            <p className={styles.detail_right_path}>
              <Link href={data.url}>캐릭터 설명 더보기 ▶️</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CharInfo_detail;
