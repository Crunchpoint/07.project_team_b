import "@/styles/globals.scss";
import Context from "@/components/context/Context";
import Layout from "@/components/Layout";
import { SessionProvider } from "next-auth/react";
import Script from 'next/script';

export default function App({ 
  Component,
  pageProps: {session, ...pageProps}
}) {

  return (
      <Context>
        <Layout>
          <SessionProvider session={session}>
            <Component {...pageProps} />
            <script
            defer
            src="https://developers.kakao.com/sdk/js/kakao.js"
            ></script>
          </SessionProvider>
        </Layout>
      </Context>
  );
}
