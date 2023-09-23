import { createUser, getUserById, getUsers } from "./userController.js";
import express from "express";

const router = express.Router();

router.post("/", createUser);
router.get("/", getUsers);
router.get("/:id", getUserById);

export default router;
