import { useRouter } from "next/router";
import Meta from "@/components/Meta";
import Profile from "@/components/social/Profile";
import Characters from "@/components/social/Characters";
import Gallery from "@/components/social/Gallery";
import styles from "@/styles/social/[user].module.scss";

const User = () => {
  const router = useRouter();

  return (
    <>
      <Meta title={router.query.user} name='name' description='description' />
      <div className={styles.bg}>
        <section className={styles.container}>
          <div className={styles.inner}>
            <Profile router={router} />
            <Characters />
            <Gallery />
          </div>
        </section>
      </div>
    </>
  );
};

export default User;
