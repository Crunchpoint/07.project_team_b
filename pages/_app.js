import "@/styles/globals.scss";
import Context from "@/components/context/Context";
import Layout from "@/components/Layout";
import { SessionProvider } from "next-auth/react";
import { AnimatePresence, motion } from "framer-motion";
import Script from "next/script";
import "../public/static/fonts/style.scss";
import { Bona_Nova } from "@next/font/google";

// const bowlby_One_SC = Bowlby_One_SC({
//   weight: "400",
//   subsets: ["latin"],
// });
const bona_Nova = Bona_Nova({
  weight: "400",
  subsets: ["latin"],
});

export default function App({ Component, pageProps: { session, ...pageProps }, router }) {
  return (
    <SessionProvider session={session}>
      <Context>
        <Layout>
          <AnimatePresence mode='wait'>
            <motion.div
              // className={bowlby_One_SC.className}
              className={bona_Nova.className}
              key={router.route}
              initial='initialState'
              animate='animateState'
              exit='exitState'
              transition={{
                duration: 0.5,
              }}
              variants={{
                initialState: {
                  opacity: 0,
                  // scale: 0.5
                },
                animateState: {
                  opacity: 1,
                  // scale: 1
                },
                exitState: {},
              }}>
              <Component {...pageProps} />
              <script defer src='https://developers.kakao.com/sdk/js/kakao.js'></script>
            </motion.div>
          </AnimatePresence>
        </Layout>
      </Context>
    </SessionProvider>
  );
}
