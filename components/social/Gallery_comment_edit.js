import { useContext, useRef, useState } from "react";
import { MyContext } from "../context/Context";
import styles from "@/styles/social/Gallery_comment.module.scss";
// import EmojiPicker from "emoji-picker-react";
const Gallery_comment_edit = () => {
  const { handleComment, selectedContent, inputRef, setEdit, selectedComment } = useContext(MyContext);
  const [active, setActive] = useState(false);

  // const [chosenEmoji, setChosenEmoji] = useState(null);
  // const onEmojiClick = (event, emojiObject) => {
  //   console.log("emojiObject", emojiObject);
  //   setChosenEmoji(emojiObject);
  // };

  const handleOpen = (e) => {
    e.preventDefault();
    setActive(!active);
  };

  const submitFn = (e) => {
    // e.preventDefault();
    handleComment(e, "PUT", selectedContent.idx, selectedComment);
    inputRef.current.value = "";
    setEdit(false);
  };

  return (
    <div className={styles.comment}>
      <form onSubmit={(e) => submitFn(e.target.comment.value)}>
        <button className={active ? styles.button__active : styles.button} onClick={(e) => handleOpen(e)}>
          &#128512;
        </button>
        {/* <EmojiPicker onEmojiClick={onEmojiClick} /> */}
        <input
          ref={inputRef}
          name='comment'
          type='text'
          placeholder='Edit a comment...'
          onKeyDown={(e) => {
            e.key === "Enter" && submitFn(e.target.value);
          }}
          required
        />
        <button type='submit'>Edit</button>
        <button type='button' onClick={() => setEdit(false)}>
          Cancel
        </button>
      </form>
    </div>
  );
};
export default Gallery_comment_edit;
