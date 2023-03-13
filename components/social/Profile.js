import styles from "@/styles/social/Profile.module.scss";
import { useContext } from "react";
import { MyContext } from "@/components/context/Context";
import Profile_contents from "./Profile_contents";

const Profile = () => {
  const { postModal } = useContext(MyContext);

  return (
    <div className={styles.header}>
      <div>
        <figure>
          <img src='../src/img/main/hacu_png.png' alt='' />
        </figure>
      </div>
      <Profile_contents />
      {/* <form onSubmit={(e) => handleSubmit(e, "POST")}> */}
      {/* <input name='board' type='text' required /> */}
      {/* <button type='submit'>임시글쓰기버튼</button> */}
      {/* </form> */}
    </div>
  );
};
export default Profile;
