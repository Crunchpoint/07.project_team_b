import styles from "@/styles/social/Profile.module.scss";
import { useContext } from "react";
import { MyContext } from "@/components/context/Context";
import Profile_contents from "./Profile_contents";

const Profile = () => {
  const { postModal, selSocialImg } = useContext(MyContext);

  return (
    <div className={styles.header}>
      <div>
        <figure>
          <img src={selSocialImg[0]?.src} alt='' />
        </figure>
      </div>
      <Profile_contents />
    </div>
  );
};
export default Profile;
