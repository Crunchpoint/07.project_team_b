import styles from "@/styles/main/Ghibli_visual.module.scss";
import Link from "next/link";
import { useContext, useState } from "react";
import { MyContext } from "@/components/context/Context";

const Ghibli_visual = () => {
  const { data } = useContext(MyContext);
  const [title, setTitle] = useState("");
  console.log(data);

  return (
    data.length > 0 && (
      <section className={styles.container}>
        <div className={styles.inner}>
          <h1>{title}</h1>
          <nav>
            <ul>
              {data?.map((item, key) => {
                return (
                  <li key={key}>
                    <Link href=''>
                      <figure>
                        <img src={item.src} alt='#' data-title={item.name} onMouseEnter={() => setTitle(item.name)} onMouseLeave={() => setTitle("")} />
                      </figure>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </section>
    )
  );
};

export default Ghibli_visual;
