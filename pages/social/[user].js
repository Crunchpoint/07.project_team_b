import { useRouter } from "next/router";
import Meta from "@/components/Meta";
import Profile from "@/components/social/Profile";
import Characters from "@/components/social/Characters";
import Gallery from "@/components/social/Gallery";
import styles from "@/styles/social/[user].module.scss";
import { useEffect, useLayoutEffect, useState } from "react";
import { MyContext } from "@/components/context/Context";
import { useContext } from "react";
import Link from "next/link";
import Custom404 from "@/components/social/Custom404";

const User = () => {
  const { setPageName, data3, setSelSocialImg, userDb } = useContext(MyContext);
  const [combinedData, setCombinedData] = useState([]);
  const [userExists, setUserExists] = useState();
  const router = useRouter();

  useEffect(() => {
    const combinedData = [...data3, ...userDb];
    setCombinedData(combinedData);
  }, [data3, userDb]);

  useEffect(() => {
    setPageName(router.query.user);
  }, [router]);

  useEffect(() => {
    let filteredData = [];
    let temp = userDb?.filter((item) => item.user_name.toLowerCase() === router.query.user);
    if (temp.length > 0) {
      filteredData = userDb?.filter((item) => {
        return item.user_name.toLowerCase() === router.query.user;
      });
      setSelSocialImg(filteredData[0]?.profile_img);
    } else {
      filteredData = data3?.filter((item) => {
        return item.name_eng?.toLowerCase().includes(router.query.user?.toLowerCase());
      });
      setSelSocialImg(filteredData[0]?.src);
    }

    const userExists = combinedData?.filter((item) => item.user_name?.toLowerCase() === router.query.user || item.name_eng?.toLowerCase().includes(router.query.user?.toLowerCase())).length > 0;

    setUserExists(userExists);
  }, [router, data3, userDb]);

  return (
    <>
      <Meta title={router.query.user} name='name' description='description' />
      <div className={styles.bg} />
      <section className={styles.container}>
        <div className={styles.inner}>
          <Profile router={router} />
          <Characters router={router} />
          <Gallery />
        </div>
      </section>
      <div className={styles.bbutton}>
        <div className={styles.button}>
          <Link href='/main/ghibli'>
            <button className={styles.home} />
          </Link>
        </div>
        <div
          className={styles.button2}
          onClick={() => {
            window.history.back();
          }}>
          <button className={styles.back} />
        </div>
      </div>
    </>
  );
};

// const abc = async () => {
//   await axios
//     .all([axios.get("http://localhost:3000/api/user"), axios.get("../src/json/charDetail.json")])
//     .then(
//       axios.spread((res1, res2) => {
//         const responseOne = res1;
//         const responseTwo = res2;
//         // use/access the results
//         console.log(responseOne);
//         console.log(responseTwo);
//       })
//     )
//     .catch((errors) => {
//       // react on errors.
//     });
// };
// abc();

// export const getStaticPaths = async () => {
//   const res = await axios.all(["http://localhost:3000/api/user", "@/public/src/json/charDetail.json"]);
//   const data = await res.json();
//   const paths = data.map((item) => {
//     return {
//       params: { user: item.user_name },
//     };
//   });
//   return {
//     paths,
//     fallback: false,
//   };
// };

export default User;
