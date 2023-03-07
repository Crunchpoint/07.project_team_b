import Gallery_textArea from "./Gallery_textArea";
import { useContext } from "react";
import { MyContext } from "../context/Context";

const Gallery_article = () => {
  const { board, selectedContent } = useContext(MyContext);

  return (
    <>
      <section>
        <Gallery_textArea props={selectedContent} />
      </section>
      <ul>
        {/* {board?.map((item, index) => {
          return (
            <li key={index}>
              <Gallery_textArea props={item._comment} />
            </li>
          );
        })} */}
      </ul>
    </>
  );
};
export default Gallery_article;
