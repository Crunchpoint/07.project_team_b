import styles from "@/styles/social/Profile_post.module.scss";
import { useContext, useEffect, useRef, useState } from "react";
import { MyContext } from "@/components/context/Context";
import Profile_post_board from "./Profile_post_board";

const Profile_post = () => {
  const {} = useContext(MyContext);
  const [image, setImage] = useState(null);
  const inputRef = useRef(null);

  const imageUploader = async (file) => {
    const data = new FormData();
    const cloudName = process.env.NEXT_PUBLIC_CLOUD_NAME;
    data.append("file", file);
    data.append("upload_preset", process.env.NEXT_PUBLIC_UPLOAD_PRESET);
    data.append("api_key", process.env.NEXT_PUBLIC_API_KEY);

    const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/upload`, {
      method: "POST",
      body: data,
    });
    return res.json();
  };

  const imageUploadBtn = () => {
    inputRef.current.click();
  };

  const fileChange = async (e) => {
    const uploaded = await imageUploader(e.target.files[0]);
    setImage(uploaded.url);
  };

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
          <div>
            {image ? (
              <img src={image}></img>
            ) : (
              <button onClick={imageUploadBtn} disabled={image}>
                Select from computer
              </button>
            )}
            <input ref={inputRef} type='file' accept='image/*' onChange={fileChange} />
          </div>
          <Profile_post_board props={image} />
        </div>
      </div>
    </div>
  );
};
export default Profile_post;
