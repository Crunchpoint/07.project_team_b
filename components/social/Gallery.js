import styles from "@/styles/social/Gallery.module.scss";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MyContext } from "@/components/context/Context";
import { useContext } from "react";
import Gallery_comment from "./Gallery_comment";
import Gallery_textArea from "./Gallery_textArea";
import Gallery_article from "./Gallery_article";
import Gallery_items from "./Gallery_items";

const Gallery = () => {
  const { board, showModal, selectedImg } = useContext(MyContext);
  const [active, setActive] = useState(false);
  const [filteredBoard, setFilteredBoard] = useState([]);
  const router = useRouter();

  useEffect(() => {
    setFilteredBoard(
      board.filter((item) => {
        return item.user_name.toLowerCase().trim().replace("-", "") === router.query.user.toLowerCase().trim().replace("-", "");
      })
    );
  }, [board]);

  return (
    <>
      <div className={styles.gallery}>
        {filteredBoard?.map((item, index) => {
          return <Gallery_items key={item.idx} item={item} styles={styles} />;
        })}
        {showModal && (
          <div className={styles.modal}>
            <div className={styles.inner}>
              <div className={styles.content}>
                <figure>
                  <img src={selectedImg} alt='' />
                </figure>
                <div className={styles.board}>
                  <div className={styles.header}>
                    <Gallery_textArea props={router.query.user} />
                  </div>
                  <div className={styles.article}>
                    <Gallery_article />
                  </div>
                  <div className={styles.social}>Area for connecting to social networks</div>
                  <div className={styles.comment}>
                    <Gallery_comment active={active} setActive={setActive} styles={styles} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Gallery;
