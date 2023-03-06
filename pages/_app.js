import "@/styles/globals.scss";
import Context from "@/components/context/Context";
import Layout from "@/components/Layout";
import { SessionProvider } from "next-auth/react";

export default function App({ 
  Component,
  pageProps: {session, ...pageProps}
}) {
  return (
    <Context>
      <Layout>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </Layout>
    </Context>
  );
}
