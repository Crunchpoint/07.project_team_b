import { useContext, useState } from "react";
import { MyContext } from "../context/Context";
// import EmojiPicker from "emoji-picker-react";
const Gallery_comment = ({ active, setActive, styles }) => {
  const { handleSubmit } = useContext(MyContext);
  // const [chosenEmoji, setChosenEmoji] = useState(null);
  // const onEmojiClick = (event, emojiObject) => {
  //   console.log("emojiObject", emojiObject);
  //   setChosenEmoji(emojiObject);
  // };

  const handleOpen = (e) => {
    e.preventDefault();
    setActive(!active);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e, "POST")}>
      <button className={active ? styles.button__active : styles.button} onClick={(e) => handleOpen(e)}>
        &#128512;
      </button>
      {/* <EmojiPicker onEmojiClick={onEmojiClick} /> */}
      <input name='comment' type='text' placeholder='Add a comment...' required />
      <button type='submit'>Post</button>
    </form>
  );
};
export default Gallery_comment;
