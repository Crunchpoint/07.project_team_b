import "@/styles/globals.scss";
import Context from "@/components/context/Context";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Context>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Context>
  );
}
