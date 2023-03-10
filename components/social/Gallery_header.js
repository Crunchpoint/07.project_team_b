import styles from "@/styles/social/Gallery_header.module.scss";
import { useRouter } from "next/router";
import Gallery_textArea from "./Gallery_textArea";

const Gallery_header = () => {
  const router = useRouter();
  return (
    <div className={styles.header}>
      <Gallery_textArea props={router.query.user} />
    </div>
  );
};
export default Gallery_header;
