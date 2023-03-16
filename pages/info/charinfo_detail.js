import Meta from "@/components/Meta";
import Detail from "@/components/info/Detail";
import { useRouter } from "next/router";

const charinfo_detail = () => {
  const router = useRouter();
  const { query } = router;

  return (
    <>
      <Meta title={`${query.ani_name} - ${query.name}`} name='name' description='description' />
      <Detail />
    </>
  );
};

export default charinfo_detail;
