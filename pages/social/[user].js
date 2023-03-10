import { useRouter } from "next/router";
import Meta from "@/components/Meta";
import Profile from "@/components/social/Profile";
import Characters from "@/components/social/Characters";
import Gallery from "@/components/social/Gallery";
import styles from "@/styles/social/[user].module.scss";
import { useEffect } from "react";
import { MyContext } from "@/components/context/Context";
import { useContext } from "react";

const User = () => {
  const { setPageName } = useContext(MyContext);
  const router = useRouter();

  useEffect(() => {
    setPageName(router.query.user);
  }, [router]);

  return (
    <>
      <Meta title={router.query.user} name='name' description='description' />
      <section className={styles.container}>
        <div className={styles.inner}>
          <Profile router={router} />
          <Characters />
          <Gallery />
        </div>
      </section>
    </>
  );
};

export default User;
