// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { executeQuery } from "./db";
import { checkApiAccess } from "./middleware";

const handler = async (req, res) => {
  const { method, body } = req;

  const selectData = async () => {
    try {
      let data = await executeQuery("select * from userinfo order by num DESC", []);
      res.json(data);
    } catch (err) {
      res.send(err);
    }
  };

  const insertData = async () => {
    try {
      const { email, user_name, profile_img, is_admin } = body;

      let data = await executeQuery(`insert into userinfo (email, user_name, profile_img, is_admin) values ("${email}", "${user_name}", "${profile_img}", "${is_admin}")`);
      res.json(data);
    } catch (err) {
      res.send(err);
    }
  };

  switch (method) {
    case "GET":
      selectData();
      break;
    case "POST":
      insertData();
      break;
    // case "PUT":
    //   updateData();
    //   break;
    // case "DELETE":
    //   deleteData();
    //   break;
  }
};

// export default checkApiAccess(handler);
export default handler;
