import styles from "@/styles/social/Profile.module.scss";
import { useContext } from "react";
import { MyContext } from "@/components/context/Context";

const Profile = ({ router }) => {
  const { handleSubmit } = useContext(MyContext);
  return (
    <div className={styles.header}>
      <div>
        <figure>
          <img src='' alt='' />
        </figure>
      </div>
      <div>
        <p>{router.query.user}</p>
        <p>128123 posts</p>
        <p>details</p>
        <form onSubmit={(e) => handleSubmit(e, "POST")}>
          <input name='board' type='text' required />
          <button type='submit'>임시글쓰기버튼</button>
        </form>
      </div>
    </div>
  );
};
export default Profile;
