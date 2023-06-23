import express, { Express, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import taskRoutes from './routes/task';


class App {
  public app: Express;

  constructor() {
    this.app = express();
    this.initializeMiddlewares();
    this.initializeRoutes();
    this.initializeErrorHandling();
  }

  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
  }

  private initializeRoutes() {
    this.app.use('/tasks', taskRoutes);
  }

  private initializeErrorHandling() {
    this.app.use(
      (err: Error, req: Request, res: Response, next: NextFunction) => {
        console.error(err.stack);
        res.status(500).json({ error: 'Internal server error' });
      }
    );
  }
}

export default App;
