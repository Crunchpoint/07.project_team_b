import React, { useContext, useEffect } from "react";
import { MyContext } from "@/components/context/Context";
import styles from "@/styles/social/Profile_contents.module.scss";
import Profile_post from "./Profile_post";
import { useRouter } from "next/router";
import Link from "next/link";
import Swal from "sweetalert2";
import { useSession } from "next-auth/react";

const Profile_contents = () => {
  const { pageName, filteredBoard, postModal, setPostModal, setTextareaValue, currentUser } = useContext(MyContext);
  const router = useRouter();
  const { data } = useSession();
  // console.log(currentUser);
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

  const handleButtonClick2 = () => {
    Swal.fire({
      title: "로그인이 필요해요",
      width: 600,
      padding: "2em",
      color: "#716add",
      background: "#fff url(/images/trees.png)",
      backdrop: `
        rgba(0,0,0,0.4)
        url("/images/nyan-cat.gif")
        left top
        no-repeat
      `,
    });
  };

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
        ) : data?.user ? (
          <button className={styles.button}>
            <Link href={"/social/[user]"} as={`/social/${currentUser[0]?.user_name.toLowerCase()}`}>
              My Profile
            </Link>
          </button>
        ) : !data?.user ? (
          <button className={styles.button}>
            <Link onClick={handleButtonClick2} href='/login/login'>
              Log in
            </Link>
          </button>
        ) : null}
      </div>
      {postModal && <Profile_post />}
    </>
  );
};
export default Profile_contents;
