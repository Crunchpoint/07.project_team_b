import Meta from "@/components/Meta";
import CharInfoDetail from "@/components/info/CharInfo_detail";
import { useRouter } from "next/router";

const charinfo_detail = () => {
  const router = useRouter();
  const str_data = router.query.data;
  let data = '';
  if (!str_data || !router.query.data) {
    return;
  } else {
    data = JSON.parse(str_data);
  }
  const ani_name = router.query.ani_name;
  const name = router.query.name;
  return (
    <>
      <Meta title={`${ani_name} - ${name}`} name='name' description='description' />
      <CharInfoDetail />
    </>
  )
}

export default charinfo_detail