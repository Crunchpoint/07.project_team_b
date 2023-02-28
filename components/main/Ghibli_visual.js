import styles from "@/styles/main/Ghibli_visual.module.scss";
import Link from "next/link";
import { useContext, useState } from "react";
import { MyContext } from "@/components/context/Context";

const Ghibli_visual = () => {
  const { data } = useContext(MyContext);
  const [title, setTitle] = useState("GHIBLI");
  console.log(data);

  const textEffect = () => {};

  return (
    data.length > 0 && (
      <section className={styles.container}>
        <div className={styles.inner}>
          <div>
            <h1 data-title={title}>{title}</h1>
          </div>
          <svg id='filters' style={{ position: "absolute", zIndex: "-1" }}>
            <defs>
              <filter id='threshold'>
                <feColorMatrix
                  in='SourceGraphic'
                  type='matrix'
                  values='1 0 0 0 0
									0 1 0 0 0
									0 0 1 0 0
									0 0 0 255 -140'
                />
              </filter>
            </defs>
          </svg>
          <nav>
            <ul>
              {data?.map((item, key) => {
                return (
                  <li key={key}>
                    <Link href=''>
                      <figure>
                        <img src={item.src} alt='#' onMouseEnter={() => setTitle(item.name)} onMouseLeave={() => setTitle("GHIBLI")} />
                      </figure>
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link href=''>
                  <figure>
                    <img src='../src/img/main/구름png.png' alt='#' />
                  </figure>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    )
  );
};

export default Ghibli_visual;
