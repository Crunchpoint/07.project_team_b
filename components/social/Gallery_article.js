import Gallery_textArea from "./Gallery_textArea";
import styles from "@/styles/social/Gallery_article.module.scss";
import { useContext, useEffect } from "react";
import { MyContext } from "../context/Context";

const Gallery_article = () => {
  const { selectedContent, comment, timeForToday, filteredComment, setFilteredComment } = useContext(MyContext);

  useEffect(() => {
    setFilteredComment(
      comment.filter((item) => {
        return item.board_idx === selectedContent.idx;
      })
    );
  }, [comment]);

  return (
    <div className={styles.article}>
      <section>
        <Gallery_textArea props={selectedContent.content} />
      </section>
      <ul>
        {filteredComment?.map((item, index) => {
          return (
            <li key={index}>
              <Gallery_textArea props={unescape(item._comment)} props2={timeForToday(item.w_time)} props3={item.comment_idx} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Gallery_article;
