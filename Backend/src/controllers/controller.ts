import { Request, Response } from 'express';
import TaskValidator from '../helper/validator';


let tasks: Task[] = [];

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  priority: number;
}

class TaskController {
  public static getAllTasks(req: Request, res: Response) {
    res.json(tasks);
  }

  public static getTaskById(req: Request, res: Response) {
    const taskId = parseInt(req.params.id);
    const task = tasks.find(t => t.id === taskId);

    if (!task) {
      res.status(404).json({ error: 'Task not found' });
    } else {
      res.json(task);
    }
  }

  public static createTask(req: Request, res: Response) {
    const taskData: Task = req.body;

    if (!TaskValidator.validateTaskData(taskData)) {
      res.status(400).json({ error: 'Invalid task data' });
      return;
    }

    const newTask: Task = {
      id: tasks.length + 1,
      ...taskData,
    };

    tasks.push(newTask);
    res.status(201).json(newTask);
  }

  public static updateTask(req: Request, res: Response) {
    const taskId = parseInt(req.params.id);
    const taskData: Task = req.body;

    if (!TaskValidator.validateTaskData(taskData)) {
      res.status(400).json({ error: 'Invalid task data' });
      return;
    }

    const taskIndex = tasks.findIndex(t => t.id === taskId);

    if (taskIndex === -1) {
      res.status(404).json({ error: 'Task not found' });
    } else {
      tasks[taskIndex] = {
        id: taskId,
        ...taskData,
      };
      res.json(tasks[taskIndex]);
    }
  }


  
  public static getTaskByPriority(req: Request, res: Response) {
    const taskPriority = parseInt(req.params.level);
    const task = tasks.find(t => t.id === taskPriority);

    if (!task) {
      res.status(404).json({ error: 'Task not found' });
    } else {
      res.json(task);
    }
  }


  public static deleteTask(req: Request, res: Response) {
    const taskId = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(t => t.id === taskId);

    if (taskIndex === -1) {
      res.status(404).json({ error: 'Task not found' });
    } else {
      const deletedTask = tasks.splice(taskIndex, 1);
      res.json(deletedTask[0]);
    }
  }
}




export default TaskController;

