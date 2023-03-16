import Meta from "@/components/Meta";
import CharInfoDetail from "@/components/info/CharInfo_detail";
import { useRouter } from "next/router";

const charinfo_detail = () => {
const router = useRouter();
const { data, ani_name, name } = router.query;

if (!data || !ani_name || !name) {
return null;
}

const parsedData = JSON.parse(data);

return (
<>
<Meta title={`${ani_name} - ${name}`} name='name' description='description' />
<CharInfoDetail data={parsedData} />
</>
);
};

export default charinfo_detail;