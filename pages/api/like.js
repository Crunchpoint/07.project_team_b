// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { executeQuery } from "./db";

const handler = async (req, res) => {
  const { method, body } = req;

  const selectData = async () => {
    try {
      let data = await executeQuery("select * from Like_ order by idx DESC", []);
      res.json(data);
    } catch (err) {
      res.send(err);
    }
  };

  const insertData = async () => {
    try {
      const { comment_idx, user_name, is_like } = body;
      console.log(body);
      let data = await executeQuery(`insert into Like_ (comment_idx, user_name, is_like) values ("${comment_idx}", "${user_name}", "${is_like}")`);
      res.json(data);
    } catch (err) {
      res.send(err);
    }
  };

  const updateData = async () => {
    try {
      const { title, name, contents, time, no } = body;
      let data = await executeQuery(`update Board set title = ?, name = ?, contents = ?, time = ? where no = ?`, [title, name, contents, time, no]);
      res.json(data);
    } catch (err) {
      res.send(err);
    }
  };

  const deleteData = async () => {
    try {
      let data = await executeQuery(`delete from Like_ where comment_idx = ?`, [body]);
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

export default handler;
