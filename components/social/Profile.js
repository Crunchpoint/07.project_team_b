import styles from "@/styles/social/Profile.module.scss";

const Profile = ({ router }) => {
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
      </div>
    </div>
  );
};
export default Profile;
