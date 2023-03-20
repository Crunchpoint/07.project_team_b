import { useRouter } from "next/router";
import { useEffect } from "react";

const Custom404 = ({ data }) => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      data === undefined && router.push("/main/ghibli");
    }, 2500);
  }, []);

  // return null;
};
export default Custom404;
