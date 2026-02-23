import express from "express";
import {
    createTodo,
    getTodos,
    updateTodo,
    deleteTodo
} from '../controllers/todo_controller.js'
import { protect } from "../middlewares/auth_middleware.js";

const router = express.Router();

router.post("/", protect, createTodo);

router.get("/", protect, getTodos);

router.put("/:id", protect, updateTodo);

router.delete("/:id", protect, deleteTodo);

export default router;

