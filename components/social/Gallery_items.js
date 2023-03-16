import styles from "@/styles/social/Gallery_items.module.scss";
import { useSession } from "next-auth/react";
import { useContext, useEffect } from "react";
import { MyContext } from "../context/Context";
import Swal from "sweetalert2";
import Link from "next/link";

const Gallery_items = ({ item, modal }) => {
  const { setInputValue, showModal, setShowModal, setSelectedImg, setSelectedContent, setSelectedBoard, setWriteTime } = useContext(MyContext);
  const user = useSession();
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

  const handleButtonClick2 = () => {
    Swal.fire({
      title: "로그인이 필요해요",
      width: 600,
      padding: "2em",
      color: "#716add",
      background: "#fff",
      backdrop: `
        rgba(0,0,0,0.4)
        left top
        no-repeat
      `,
    });
  };
  return (
    <>
      {user?.data ? (
        <figure className={styles.gallery_item} onClick={onClickFn}>
          <img className={styles.gallery_img} src={item.board_img} alt='' />
        </figure>
      ) : (
        <Link href='/login/login'>
          <figure className={styles.gallery_item} onClick={handleButtonClick2}>
            <img className={styles.gallery_img} src={item.board_img} alt='' />
          </figure>
        </Link>
      )}
    </>
  );
};

export default Gallery_items;
