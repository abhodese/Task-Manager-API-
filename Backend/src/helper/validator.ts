interface TaskData {
    title: string;
    description: string;
    completed: boolean;
  }
  
  class TaskValidator {
    public static validateTaskData(data: TaskData): boolean {
      const { title, description, completed } = data;
      if (!title || !description || typeof completed !== 'boolean') {
        return false;
      }
      return true;
    }
  }
  
  export default TaskValidator;