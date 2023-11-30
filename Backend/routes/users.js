import express from "express";
import {
  createUser,
  readUser,
  updateUser,
  deleteUser,
} from "../controllers/users.js";
const router = express.Router();

router.post("/", createUser);
router.get("/", readUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
