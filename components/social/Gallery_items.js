import login from "@/pages/login";
import { useContext, useEffect } from "react";
import { MyContext } from "../context/Context";

const Gallery_items = ({ item, idx, styles }) => {
  const { board, showModal, setShowModal, setSelectedImg, selectedContent, setSelectedContent } = useContext(MyContext);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (e.target.className === styles.modal && e.target.className !== styles.gallery_item) {
        setShowModal(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showModal]);

  const testArray = [
    {
      img: "../src/img/main/Boeun_png.png",
    },
    {
      img: "../src/img/main/ponyo_bg.jpg",
    },
    {
      img: "../src/img/main/ponyo_png.png",
    },
    {
      img: "../src/img/main/howl_png2.png",
    },
    {
      img: "../src/img/main/hacu_png.png",
    },
    {
      img: "../src/img/main/castle_bg.jpg",
    },
    {
      img: "../src/img/main/castle_bg.jpg",
    },
  ];

  return (
    <>
      <figure
        onClick={() => {
          setShowModal(!showModal);
          setSelectedImg(item.board_img);
          setSelectedContent(item.content);
        }}>
        <img className={styles.gallery_item} src={item.board_img} alt='' />
      </figure>
    </>
  );
};
export default Gallery_items;
