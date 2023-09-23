import { create, get, getById } from "./userService.js";
import { genSaltSync, hashSync } from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

export const createUser = (req, res) => {
  const body = req.body;
  const salt = genSaltSync(10);
  body.password = hashSync(body.password, salt);
  create(body, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        mssg: "Database connection error",
      });
    }
    return res.status(200).json({
      mssg: "User Created Successfully",
    });
  });
};

export const getUserById = (req, res) => {
  const id = req.params.id;
  getById(id, (err, results) => {
    if (err) {
      console.error(err);
      err;
    }
    if (!results) {
      return res.json({
        mssg: "Record not found",
      });
    }
    return res.json({
      data: results,
    });
  });
};

export const getUsers = (req, res) => {
  get((err, results) => {
    if (err) {
      console.error(err);
      return;
    }

    return res.json({
      data: results,
    });
  });
};
