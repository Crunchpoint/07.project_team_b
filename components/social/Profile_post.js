import styles from "@/styles/social/Profile_post.module.scss";
import { useContext, useEffect } from "react";
import { MyContext } from "@/components/context/Context";
import Profile_post_board from "./Profile_post_board";

const Profile_post = () => {
  const {} = useContext(MyContext);

  return (
    <div className={styles.modal}>
      <div className={styles.inner}>
        <div>
          <h2>Create New Post</h2>
          <button form='post-form' type='submit'>
            Post
          </button>
        </div>
        <div className={styles.content}>
          <figure>
            <img src='' alt='사진업로드..' />
          </figure>
          <Profile_post_board />
        </div>
      </div>
    </div>
  );
};
export default Profile_post;
