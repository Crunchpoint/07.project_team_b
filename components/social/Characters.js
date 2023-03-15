import styles from "@/styles/social/Characters.module.scss";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../context/Context";


const Characters = () => {
  const {data3} = useContext(MyContext);
  const router = useRouter();
  // var random = [];
  const [ranNum, setRanNum] = useState([]);
  var len = data3.length;

  function randomNum() {
    const randomNum = [];
    const usedIndex = new Set();
    while (randomNum.length < 5 && data3.length > 0) {
      let randomIndex = Math.floor(Math.random() * len);
      if (!usedIndex.has(randomIndex)) {
        randomNum.push(randomIndex);
        usedIndex.add(randomIndex);
      }
    }
    setRanNum(randomNum);
  }

  // function getRandChar() {
  //   var num = [];
  //   for(var i=0; i<5; i++) {
  //     let temp = Math.floor(Math.random() * (len));
  //     num.push(temp)
  //     // console.log('random', random)
  //     // if(random.indexOf(num) === -1) {
  //     // } else {
  //       // i--
  //     // }
  //   }
  //   setRandom(num);
  // }
  useEffect(()=> {
    // getRandChar()
    randomNum()
    // console.log(random)
  }, [data3])

  return (
    <div className={styles.characters}>
      {
        ranNum.map((e, key)=> {
          return (
            <figure>
              <img src={data3[ranNum[key]].src} alt={data3[ranNum[key]].name_eng.replace(' ', '')}
                onClick={()=> {
                  var name = data3[ranNum[key]].name_eng
                  if(name.includes('/')) {
                    var temp = name.split('/')
                    name = temp[1];
                  }
                  router.push(`/social/${name}`)
                }}
              />
              <p>{data3[ranNum[key]].name_eng}</p>
            </figure>
          )
        })
      }
    </div>
  );
};
export default Characters;