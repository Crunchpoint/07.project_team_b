import styles from "@/styles/social/Gallery.module.scss";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MyContext } from "@/components/context/Context";
import { useContext } from "react";
import Gallery_textArea_modal from "./Gallery_textArea_modal";
import Gallery_comment from "./Gallery_comment";
import Gallery_header from "./Gallery_header";
import Gallery_article from "./Gallery_article";
import Gallery_items from "./Gallery_items";
import Gallery_social from "./Gallery_social";
import Gallery_comment_edit from "./Gallery_comment_edit";

const Gallery = () => {
  const { board, showModal, selectedImg, crudModal, edit } = useContext(MyContext);
  const [filteredBoard, setFilteredBoard] = useState([]);
  const router = useRouter();

  useEffect(() => {
    setFilteredBoard(
      board.filter((item) => {
        return item.user_name.toLowerCase().trim().replace("-", "") === router.query.user.toLowerCase().trim().replace("-", "");
      })
    );
  }, [board, crudModal]);

  return (
    <>
      <div className={styles.gallery}>
        {filteredBoard?.map((item) => {
          return <Gallery_items key={item.idx} item={item} modal={styles} />;
        })}
        {showModal && (
          <div className={styles.modal}>
            <div className={styles.inner}>
              <div className={styles.content}>
                <figure>
                  <img src={selectedImg} alt='' />
                </figure>
                <div className={styles.board}>
                  <Gallery_header />
                  <Gallery_article />
                  <Gallery_social />
                  {edit ? <Gallery_comment_edit /> : <Gallery_comment />}
                </div>
              </div>
            </div>
          </div>
        )}
        {crudModal && <Gallery_textArea_modal />}
      </div>
    </>
  );
};
export default Gallery;
