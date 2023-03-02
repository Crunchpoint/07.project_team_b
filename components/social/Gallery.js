import styles from "@/styles/social/Gallery.module.scss";

const Gallery = () => {
  return (
    <div className={styles.gallery}>
      <figure>
        <img src='../src/img/main/Boeun_png.png' alt='' />
      </figure>
      <figure>
        <img src='../src/img/main/Boeun_bg.jpg' alt='' />
      </figure>
      <figure>
        <img src='../src/img/main/Boeun_png2.png' alt='' />
      </figure>
      <figure>
        <img src='../src/img/main/howl_bg.jpg' alt='' />
      </figure>
      <figure>
        <img src='../src/img/main/howl_png.png' alt='' />
      </figure>
      <figure>
        <img src='../src/img/main/howl_png2.png' alt='' />
      </figure>
      <figure>
        <img src='../src/img/main/Boeun_bg.jpg' alt='' />
      </figure>
    </div>
  );
};
export default Gallery;
