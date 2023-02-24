import Head from "next/head";

const Meta = ({ title, name, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name={name} content={description} />
      <link rel='icon' href='/src/favicon.ico' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
    </Head>
  );
};

export default Meta;
