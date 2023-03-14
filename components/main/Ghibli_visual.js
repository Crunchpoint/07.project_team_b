import styles from "@/styles/main/Ghibli_visual.module.scss";
import Link from "next/link";
import { SectionsContainer, Section } from "react-fullpage";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "@/components/context/Context";
import TopButton from "./TopButton";
import Boeun from "./Boeun";
import Castle from "./Castle";
import Howl from "./Howl";
import Ponyo from "./Ponyo";
import Spirited from "./Spirited";
import Totoro from "./Totoro";
import All from "./All";
import { useRouter } from "next/router";

const Ghibli_visual = () => {
  const { data } = useContext(MyContext);
  const [title, setTitle] = useState("GHIBLI");
  const router = useRouter();

  const textEffect = () => {};

  useEffect(() => {
    router.push("/main/ghibli");
  }, []);

  let options = {
    anchors: ["sectionOne", "sectionTwo", "sectionThree", "sectionFour", "sectionFive", "sectionSix", "sectionSeven"],
  };

  return (
    data.length > 0 && (
      <>
        <SectionsContainer {...options}>
          <Section>
            <section className={styles.container}>
              <div className={styles.inner}>
                <div>
                  <h1>{title}</h1>
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
                  </ul>
                </nav>
              </div>
            </section>
          </Section>

          <Section>
            <Castle />
          </Section>
          <Section>
            <Spirited />
          </Section>
          <Section>
            <Howl />
          </Section>
          <Section>
            <Ponyo />
          </Section>
          <Section>
            <Totoro />
          </Section>
          <Section>
            <Boeun />
          </Section>
        </SectionsContainer>
        <TopButton />
      </>
    )
  );
};

export default Ghibli_visual;
