import styles from "@/styles/Layout.module.scss";
import CustomCursor from "./cursor/CustomCursor";

const Layout = ({ children }) => {
  return (
    <div>
      <CustomCursor />
      {children}
    </div>
  );
};

export default Layout;
