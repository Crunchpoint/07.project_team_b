import Meta from "@/components/Meta";
import CharInfoDetail from "@/components/info/CharInfo_detail";
import { useRouter } from "next/router";

const charinfo_detail = () => {
  const router = useRouter();
  const { ani_name, name } = router.query;

  return (
    <>
      <Meta title={`${ani_name} - ${name}`} name='name' description='description' />
      <CharInfoDetail />
    </>
  );
};

export default charinfo_detail;
