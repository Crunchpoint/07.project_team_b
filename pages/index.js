import Hello from "@/components/intro/Hello";
import Loading from "@/components/intro/Loading";
import Meta from "@/components/Meta";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useContext } from "react";
import { MyContext } from "@/components/context/Context";

export default function Home() {
  const { setLoadingProgress } = useContext(MyContext);
  const router = useRouter();

  useEffect(() => {
    router.pathname === "/" && setLoadingProgress(0);
  }, [router.pathname]);

  return (
    <>
      <Meta title='title' name='name' description='description' />
      <Loading />
      <Hello />
    </>
  );
}
