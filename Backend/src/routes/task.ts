import express, { Router } from 'express';
import TaskController from '../controllers/controller';

const router: Router = express.Router();

router.get('/', TaskController.getAllTasks);
router.get('/:id', TaskController.getTaskById);
router.post('/', TaskController.createTask);
router.put('/:id', TaskController.updateTask);
router.delete('/:id', TaskController.deleteTask);

router.get('/priority/:priority', TaskController.getTaskByPriority);


export default router;