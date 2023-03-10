// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import login from "../login";
import { executeQuery } from "./db";

const handler = async (req, res) => {
  const { method, body } = req;

  const selectData = async () => {
    try {
      let data = await executeQuery("select * from CommentTable order by comment_idx DESC", []);
      res.json(data);
    } catch (err) {
      res.send(err);
    }
  };

  const insertData = async () => {
    try {
      console.log(body);
      const { board_idx, user_id, _comment } = body;
      let data = await executeQuery(`insert into CommentTable (board_idx, user_id, _comment) values (${board_idx}, ${user_id}, "${_comment}")`);
      res.json(data);
    } catch (err) {
      res.send(err);
    }
  };

  const updateData = async () => {
    try {
      const { _comment, comment_idx } = body;
      let data = await executeQuery(`UPDATE glibli.CommentTable SET _comment = "${_comment}" WHERE comment_idx = ${comment_idx}`);
      res.json(data);
    } catch (err) {
      res.send(err);
    }
  };

  const deleteData = async () => {
    try {
      console.log(body);
      let data = await executeQuery(`delete from CommentTable where comment_idx = ?`, [body]);
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
