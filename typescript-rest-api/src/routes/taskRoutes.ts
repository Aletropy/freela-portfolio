import { Router } from "express";
import { createTask, deleteTask, getAllTasks, getTaskById, updateTask } from "../controllers/taskController";

const router = Router()

router.get('/tasks', getAllTasks)
router.post('/tasks', createTask)
router.get('/tasks/:id', getTaskById)
router.put('/tasks/:id', updateTask)
router.delete('/tasks/:id', deleteTask)

export default router;