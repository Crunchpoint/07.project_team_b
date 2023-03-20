import styles from "@/styles/social/Characters.module.scss";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../context/Context";

const Characters = () => {
  const { userDb, data3 } = useContext(MyContext);
  const router = useRouter();
  const [ranNum, setRanNum] = useState([]);
  const [combinedData, setCombinedData] = useState([]);
  let len = combinedData.length;

  useEffect(() => {
    let combinedData = [...data3, ...userDb];
    setCombinedData(combinedData);
  }, [data3, userDb]);

  function randomNum() {
    const randomNum = [];
    const usedIndex = new Set();
    while (randomNum.length < 6 && combinedData?.length > 0) {
      let randomIndex = Math.floor(Math.random() * len);
      if (!usedIndex.has(randomIndex)) {
        randomNum.push(randomIndex);
        usedIndex.add(randomIndex);
      }
    }
    setRanNum(randomNum);
  }

  useEffect(() => {
    randomNum();
  }, [data3, userDb, combinedData]);

  return (
    <div className={styles.characters}>
      {ranNum.map((e, key) => {
        return (
          <figure key={key}>
            <img
              src={combinedData[ranNum[key]].src || combinedData[ranNum[key]].profile_img}
              alt={combinedData[ranNum[key]].name_eng?.replace(" ", "") || combinedData[ranNum[key]].user_name}
              onClick={() => {
                let name = combinedData[ranNum[key]].user_name?.toLowerCase() || combinedData[ranNum[key]].name_eng?.trim();
                if (name?.includes("/")) {
                  let temp = name.split("/");
                  name = temp[1].trim();
                }
                router.push(`/social/${name}`);
              }}
            />
            <p>{combinedData[ranNum[key]].name_eng || combinedData[ranNum[key]].user_name}</p>
          </figure>
        );
      })}
    </div>
  );
};
export default Characters;
