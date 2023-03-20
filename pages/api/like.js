// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { query } from "express";
import { executeQuery } from "./db";
import { checkApiAccess } from "./middleware";

const handler = async (req, res) => {
  const { method, body } = req;
  const query = req.query;

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
      const { comment_idx, user_name } = query;
      let data = await executeQuery(`delete from Like_ where comment_idx = ? and user_name = ?`, [comment_idx, user_name]);
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
