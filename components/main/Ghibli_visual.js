import styles from "@/styles/main/Ghibli_visual.module.scss";
import Link from "next/link";
import Castle from "./Castle";

const Ghibli_visual = () => {
  return (
    <>
    <section className={styles.container}>
      <div className={styles.inner}>
        <nav>
          <ul>
            <li>
              <Link href='/'>
                <figure>
                  <img src='' alt='#' />
                </figure>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>

    <section>
      <Castle/>
    </section>
    </>
  );
};
export default Ghibli_visual;
