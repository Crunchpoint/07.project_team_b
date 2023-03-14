import React, { useContext, useEffect } from "react";
import { MyContext } from "@/components/context/Context";
import styles from "@/styles/social/Profile_contents.module.scss";
import Profile_post from "./Profile_post";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";

const Profile_contents = () => {
  const { pageName, filteredBoard, postModal, setPostModal, setTextareaValue, currentUser } = useContext(MyContext);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (e.target.className !== styles.button && e.target.classList.value.includes("modal")) {
        setPostModal(false);
        setTextareaValue("");
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [postModal]);

  // console.log(currentUser[0].user_name);

  return (
    <>
      <div className={styles.contents}>
        <div>
          <p>@{pageName}</p>
          <p>{filteredBoard.length} posts</p>
        </div>
        {currentUser[0]?.user_name.toLowerCase() === router.query.user?.toLowerCase() ? (
          <button className={styles.button} onClick={(e) => setPostModal(!postModal)}>
            Create New Post
          </button>
        ) : (
          <button className={styles.button}>
            <Link href={`/social/${currentUser[0]?.user_name.toLowerCase()}`}>My Profile</Link>
          </button>
        )}
      </div>
      {postModal && <Profile_post />}
    </>
  );
};
export default Profile_contents;
