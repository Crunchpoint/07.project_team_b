import Head from "next/head";
import { MyContext } from "@/components/context/Context";
import { useContext } from "react";

const Meta = ({ title, name, description }) => {
  const { showModal, postModal } = useContext(MyContext);

  return (
    <Head>
      <title>{title}</title>
      <meta name={name} content={description} />
      <link rel='icon' href='/src/favicon.ico' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link href='https://fonts.googleapis.com/css2?family=Bowlby+One+SC&display=swap' rel='stylesheet' />
      <style>
        {`
          body {
            overflow: ${showModal || postModal ? "hidden" : "auto"};
          }
        `}
      </style>
    </Head>
  );
};

export default Meta;
