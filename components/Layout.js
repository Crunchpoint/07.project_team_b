import styles from "@/styles/Layout.module.scss";
import CustomCursor from "./cursor/CustomCursor";

const Layout = ({ children }) => {
  return (
    <div className={styles.main}>
      <CustomCursor />
      {children}
    </div>
  );
};

export default Layout;
