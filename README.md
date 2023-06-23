# Task Management API

This is a simple task management API that allows you to perform CRUD operations on tasks. The API is built using Node.js with Express.js and TypeScript.

## Endpoints

### Retrieve all tasks

GET /tasks


This endpoint retrieves all tasks stored in the system.

### Retrieve a single task by ID

GET /tasks/:id


This endpoint retrieves a single task based on the provided task ID.

### Create a new task

POST /tasks


This endpoint allows you to create a new task. It expects a JSON body with the following properties:

- `title` (string): The title of the task.
- `description` (string): The description of the task.
- `completed` (boolean): The completion status of the task.

### Update an existing task by ID

PUT /tasks/:id

This endpoint updates an existing task identified by the task ID. It expects a JSON body with the same properties as the create endpoint.

### Delete a task by ID

DELETE /tasks/:id

This endpoint deletes a task based on the provided task ID.

## Error Handling

The API includes proper error handling for invalid requests. If a request is invalid, the API will respond with an appropriate error message and status code.

## Input Validation

The API validates the input data for task creation and updates. It ensures that the `title` and `description` fields are not empty and that the `completed` field is a boolean value.

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/your/repository.git

2. Install dependencies:

```bash
npm install
```

3. Run the application:

```bash
npm run dev
```

4. Navigate to http://localhost:3000/tasks to access the API.
```

## Testing

You can test the API using tools like Postman or cURL. Here are some example requests:

1. Retrieve all tasks:

```bash
curl http://localhost:3000/tasks
```

2. Retrieve a single task:

```bash
curl http://localhost:3000/tasks/:id
```

3. Create a new task:

```bash
curl -X POST -H "Content-Type: application/json" -d '{"title":"My Task","description":"This is a task.","completed":false}' http://localhost:3000/tasks
```
or 

```bash
POST http://localhost:3000/tasks
Content-Type: application/json

{
  "title": "My Task",
  "description": "This is a task.",
  "completed": false
}
```

4. Update an existing task:

```bash
curl -X PUT -H "Content-Type: application/json" -d '{"title":"My Task","description":"This is a task.","completed":true}' http://localhost:3000/tasks/:id
```
 or

```bash
PUT http://localhost:3000/tasks/:id
Content-Type: application/json

{
  "title": "My Task",
  "description": "This is a task.",
  "completed": true
}
```


5. Delete a task:

```bash
curl -X DELETE http://localhost:3000/tasks/:id
```
or 

```bash
DELETE http://localhost:3000/tasks/:id
```

## License
Feel free to customize the content of the `README.md` file based on your specific project details.

