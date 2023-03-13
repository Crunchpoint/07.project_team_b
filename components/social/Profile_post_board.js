import styles from "@/styles/social/Profile_post_board.module.scss";
import Gallery_textArea from "./Gallery_textArea";
import { useContext, useState } from "react";
import { MyContext } from "@/components/context/Context";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

const Profile_post_board = () => {
  const { pageName, textareaValue, setTextareaValue, handleSubmit } = useContext(MyContext);
  const [active, setActive] = useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    setActive(!active);
  };

  const submitFn = (e) => {
    handleSubmit(escape(e), "POST", pageName);
    setTextareaValue("");
    setActive(false);
  };
  const handleEmoji = (e) => {
    setTextareaValue(textareaValue + e.native);
  };

  return (
    <div className={styles.board}>
      <section>
        <Gallery_textArea props={pageName} />
      </section>
      <div className={styles.write}>
        <form
          id='post-form'
          onSubmit={(e) => {
            e.preventDefault();
            submitFn(e.target.text.value);
          }}>
          <textarea
            name='text'
            id='text'
            placeholder='Write a post'
            value={textareaValue}
            autoFocus
            required
            onChange={(e) => {
              setTextareaValue(e.target.value);
            }}
          />
        </form>
        <div>
          <button className={active ? styles.button__active : styles.button} onClick={(e) => handleOpen(e)}>
            &#128512;
          </button>
          <Picker data={data} onEmojiSelect={(e) => handleEmoji(e)} />
          <p>{textareaValue.length} / 2,000</p>
        </div>
      </div>
    </div>
  );
};

export default Profile_post_board;
