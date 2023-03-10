import styles from "@/styles/Layout.module.scss";
import CustomCursor from "./cursor/CustomCursor";
import { useContext } from "react";
import { MyContext } from "./context/Context";

const Layout = ({ children }) => {
  const { showModal } = useContext(MyContext);
  return (
    <div className={showModal ? styles.main__active : styles.main}>
      <CustomCursor />
      {children}
    </div>
  );
};

export default Layout;
