import { useRouter } from "next/router";
import Meta from "@/components/Meta";
import Profile from "@/components/social/Profile";
import Characters from "@/components/social/Characters";
import Gallery from "@/components/social/Gallery";
import styles from "@/styles/social/[user].module.scss";
import { useEffect } from "react";
import { MyContext } from "@/components/context/Context";
import { useContext } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

const User = () => {
  const { setPageName } = useContext(MyContext);
  const router = useRouter();

  useEffect(() => {
    setPageName(router.query.user);
  }, [router]);

  return (
    <>
      <Meta title={router.query.user} name='name' description='description' />
      <div className={styles.bg}></div>
      <section className={styles.container}>
        <div className={styles.inner}>
          <Profile router={router} />
          <Characters />
          <Gallery />
        </div>
      </section>

      <div className={styles.bbutton}>
        <div className={styles.button}>
          <Link href='/main/ghibli'>
            <button className={styles.home}></button>
          </Link>
        </div>
        <div
          className={styles.button2}
          onClick={() => {
            window.history.back();
          }}>
          <button className={styles.back}></button>
        </div>
      </div>
    </>
  );
};

export default User;
