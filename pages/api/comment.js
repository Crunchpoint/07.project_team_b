// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import login from "../login";
import { executeQuery } from "./db";
import { checkApiAccess } from "./middleware";

const handler = async (req, res) => {
  const { method, body } = req;

  const selectData = async () => {
    try {
      let data = await executeQuery("select * from commenttable order by comment_idx DESC", []);
      res.json(data);
    } catch (err) {
      res.send(err);
    }
  };

  const insertData = async () => {
    try {
      const { board_idx, user_name, _comment } = body;
      console.log(_comment);
      let data = await executeQuery(`insert into commenttable (board_idx, user_name, comments) values ("${board_idx}", "${user_name}", "${_comment}")`);
      res.json(data);
    } catch (err) {
      res.send(err);
    }
  };

  const updateData = async () => {
    try {
      const { _comment, comment_idx } = body;
      let data = await executeQuery(`UPDATE commenttable SET comments = "${_comment}" WHERE comment_idx = ${comment_idx}`);
      res.json(data);
    } catch (err) {
      res.send(err);
    }
  };

  const deleteData = async () => {
    try {
      let data = await executeQuery(`delete from commenttable where comment_idx = ?`, [body]);
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
    case "PUT":
      updateData();
      break;
    case "DELETE":
      deleteData();
      break;
  }
};

// export default checkApiAccess(handler);
export default handler;
