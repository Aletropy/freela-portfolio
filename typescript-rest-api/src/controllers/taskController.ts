import { Request, Response } from "express"
import Task from "../models/Task"

export const getAllTasks = async (req : Request, res : Response) => {
    const tasks = await Task.findAll()
    res.json(tasks)
}

export const createTask = async (req : Request, res : Response) => {
    if(!req.body.title) {
        res.status(400).json({
            error: "O título é obrigatório"
        })
        return
    }
    const task = await Task.create(req.body)
    res.status(201).json(task)
}

export const getTaskById = async (req : Request, res : Response) => {
    const { id } = req.params
    const task = await Task.findByPk(id)
    if(!task) {
        res.status(404).json({
            error: "Tarefa não encontrada"
        })
        return
    }
    res.json(task)
}

export const updateTask = async (req: Request, res: Response) => {
  const task = await Task.findByPk(req.params.id);
  if (task) {
    await task.update(req.body);
    res.json(task);
  } else {
    res.status(404).json({ error: 'Tarefa não encontrada.' });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  const task = await Task.findByPk(req.params.id);
  if (task) {
    await task.destroy();
    res.status(204).send();
  } else {
    res.status(404).json({ error: 'Tarefa não encontrada.' });
  }
};