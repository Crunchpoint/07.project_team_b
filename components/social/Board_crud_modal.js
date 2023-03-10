import styles from "@/styles/social/Board_crud_modal.module.scss";
import { useContext, useEffect } from "react";
import { MyContext } from "../context/Context";

const Board_crud_modal = () => {
  const { boardCrud, setBoardCrud, boardFn, selectedBoard } = useContext(MyContext);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (e.target.className === styles.cancel || e.target.className === styles.modal) {
        setBoardCrud(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [boardCrud]);

  return (
    <div className={styles.modal}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <p
            onClick={(e) => {
              boardFn("DELETE", selectedBoard);
            }}>
            Delete
          </p>
          <p
            className={styles.cancel}
            onClick={(e) => {
              setBoardCrud(!boardCrud);
            }}>
            Cancel
          </p>
        </div>
      </div>
    </div>
  );
};
export default Board_crud_modal;
