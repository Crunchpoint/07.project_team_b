// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import login from "../login";
import { executeQuery } from "./db";

const handler = async (req, res) => {
  const { method, body } = req;

  const selectData = async () => {
    try {
      let data = await executeQuery("select * from CommentTable order by idx DESC", []);
      res.json(data);
    } catch (err) {
      res.send(err);
    }
  };

  const insertData = async () => {
    try {
      const { user, content, profile_img } = body;
      let data = await executeQuery(`insert into CommentTable (user, content, profile_img) values (?,?,?)`, [user, content, profile_img]);
      res.json(data);
    } catch (err) {
      res.send(err);
    }
  };

  const updateData = async () => {
    try {
      const { title, name, contents, time, no } = body;
      let data = await executeQuery(`update CommentTable set title = ?, name = ?, contents = ?, time = ? where no = ?`, [title, name, contents, time, no]);
      res.json(data);
    } catch (err) {
      res.send(err);
    }
  };

  const deleteData = async () => {
    try {
      let data = await executeQuery(`delete from CommentTable where no = ?`, [body]);
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
