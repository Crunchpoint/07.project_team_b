import Hello from "@/components/intro/Hello";
import Loading from "@/components/intro/Loading";
import Meta from "@/components/Meta";

export default function Home() {
  return (
    <>
      <Meta title='title' name='name' description='description' />
      <Loading />
      <Hello/>
    </>
  );
}
