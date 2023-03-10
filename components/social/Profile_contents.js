import React, { useContext, useEffect } from "react";
import { MyContext } from "@/components/context/Context";
import styles from "@/styles/social/Profile_contents.module.scss";
import Profile_post from "./Profile_post";

const Profile_contents = () => {
  const { pageName, filteredBoard, postModal, setPostModal, setTextareaValue } = useContext(MyContext);

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

  return (
    <>
      <div className={styles.contents}>
        <div>
          <p>@{pageName}</p>
          <button className={styles.button} onClick={(e) => setPostModal(!postModal)}>
            Create New Post
          </button>
        </div>
        <p>{filteredBoard.length} posts</p>
        <p>컨텐츠 캐릭터 설명...?</p>
      </div>
      {postModal && <Profile_post />}
    </>
  );
};
export default Profile_contents;
