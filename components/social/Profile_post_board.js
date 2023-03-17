import styles from "@/styles/social/Profile_post_board.module.scss";
import Gallery_textArea from "./Gallery_textArea";
import Gallery_textArea_header from "./Gallery_textArea_header";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "@/components/context/Context";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

const Profile_post_board = ({ props }) => {
  const { pageName, textareaValue, setTextareaValue, handleSubmit } = useContext(MyContext);
  const [active, setActive] = useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    setActive(!active);
  };

  const submitFn = (e) => {
    handleSubmit(escape(e), "POST", pageName, props);
    setTextareaValue("");
    setActive(false);
  };

  const handleEmoji = (e) => {
    setTextareaValue(textareaValue + e.native);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      console.log(e.target.className);
      if (e.target.className !== styles.button__active) {
        setActive(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [active]);

  return (
    <div className={styles.board}>
      <section>
        <Gallery_textArea_header props={pageName} />
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
        <div>
          <figure>
            <img src='https://media4.giphy.com/media/3ohze3Vg3vzX7c86NG/giphy.gif?cid=ecf05e4794mxl23oxdnomoqsu1dlrsln21cfz7ct3lj1raxa&rid=giphy.gif&ct=g' alt='haku_gif' />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Profile_post_board;
