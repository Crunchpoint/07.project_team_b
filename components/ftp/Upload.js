import { useRouter } from "next/router";
import React from "react";

const Upload = () => {
  const router = useRouter();
  return (
    <>
      <div>
        <form action='/ftp/upload' method='post' encType='multipart/form-data'>
          <input type='file' name='file'></input>
          <input type='submit' name='submit'></input>
        </form>
      </div>
    </>
  );
};

export default Upload;
