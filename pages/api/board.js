// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { executeQuery } from "./db";
import { checkApiAccess } from "./middleware";

const handler = async (req, res) => {
  const { method, body } = req;

  const selectData = async () => {
    try {
      let data = await executeQuery("select * from board order by idx DESC", []);
      res.json(data);
    } catch (err) {
      res.send(err);
    }
  };

  const insertData = async () => {
    try {
      const { user_id, content, board_img, user_name } = body;
      let data = await executeQuery(`insert into board (user_id, content, board_img, user_name) values ("${user_id}", "${content}", "${board_img}", "${user_name}")`);
      res.json(data);
    } catch (err) {
      res.send(err);
    }
  };

  const updateData = async () => {
    try {
      const { title, name, contents, time, no } = body;
      let data = await executeQuery(`update board set title = ?, name = ?, contents = ?, time = ? where no = ?`, [title, name, contents, time, no]);
      res.json(data);
    } catch (err) {
      res.send(err);
    }
  };

  const deleteData = async () => {
    try {
      let data = await executeQuery(`delete from board where idx = ?`, [body]);
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
