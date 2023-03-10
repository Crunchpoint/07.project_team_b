import styles from "@/styles/social/Gallery_items.module.scss";
import { useContext, useEffect } from "react";
import { MyContext } from "../context/Context";

const Gallery_items = ({ item, modal }) => {
  const { setInputValue, showModal, setShowModal, setSelectedImg, setSelectedContent, setSelectedBoard, setWriteTime } = useContext(MyContext);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (e.target.className === modal.modal && e.target.className !== styles.gallery_img) {
        setShowModal(false);
        setInputValue("");
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showModal]);

  const onClickFn = () => {
    setShowModal(!showModal);
    setSelectedImg(item.board_img);
    setSelectedContent(item);
    setSelectedBoard(item.idx);
    setWriteTime(item.time);
  };

  return (
    <>
      <figure className={styles.gallery_item} onClick={() => onClickFn()}>
        <img className={styles.gallery_img} src={item.board_img} alt='' />
      </figure>
    </>
  );
};
export default Gallery_items;
