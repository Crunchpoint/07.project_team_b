import { useRouter } from "next/router";
import Profile from "@/components/social/Profile";
import Characters from "@/components/social/Characters";
import Gallery from "@/components/social/Gallery";
import styles from "@/styles/social/[user].module.scss";

const User = () => {
  const router = useRouter();

  return (
    <section className={styles.container}>
      <div className={styles.inner}>
        <Profile router={router} />
        <Characters />
        <Gallery />
      </div>
    </section>
  );
};

export default User;
