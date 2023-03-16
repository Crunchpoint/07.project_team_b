import Gallery_textArea from "./Gallery_textArea";
import Gallery_textArea_header from "./Gallery_textArea_header";
import styles from "@/styles/social/Gallery_article.module.scss";
import { useContext, useEffect } from "react";
import { MyContext } from "../context/Context";

const Gallery_article = () => {
  const { selectedContent, comment, timeForToday, filteredComment, setFilteredComment, writeTime } = useContext(MyContext);

  useEffect(() => {
    setFilteredComment(
      comment?.filter((item) => {
        return item.board_idx === selectedContent.idx;
      })
    );
  }, [comment]);

  return (
    <div className={styles.article}>
      <section>
        <Gallery_textArea_header props={selectedContent.user_name} props2={timeForToday(writeTime)} props3={unescape(selectedContent.content)} />
      </section>
      <ul>
        {filteredComment?.map((item, index) => {
          // console.log(item);
          return (
            <li key={index}>
              <Gallery_textArea props={unescape(item._comment)} props2={timeForToday(item.w_time)} props3={item.comment_idx} props4={item.user_name} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Gallery_article;
