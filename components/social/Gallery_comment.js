import { useContext, useRef, useState } from "react";
import { MyContext } from "../context/Context";
import styles from "@/styles/social/Gallery_comment.module.scss";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

const Gallery_comment = () => {
  const { handleComment, selectedContent, inputRef, inputValue, setInputValue } = useContext(MyContext);
  const [active, setActive] = useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    setActive(!active);
  };

  const submitFn = (e) => {
    handleComment(escape(e), "POST", selectedContent.idx);
    setInputValue("");
    setActive(false);
  };

  const handleEmoji = (e) => {
    setInputValue(inputValue + e.native);
  };

  return (
    <div className={styles.comment}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitFn(e.target.comment.value);
        }}>
        <button className={active ? styles.button__active : styles.button} onClick={(e) => handleOpen(e)}>
          &#128512;
        </button>
        <Picker data={data} onEmojiSelect={(e) => handleEmoji(e)} />
        <input
          ref={inputRef}
          name='comment'
          type='text'
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          placeholder='Add a comment...'
          // onKeyDown={(e) => {
          //   e.key === "Enter" && submitFn(e.target.value);
          // }}
          required
        />
        <button type='submit'>Post</button>
      </form>
    </div>
  );
};
export default Gallery_comment;
