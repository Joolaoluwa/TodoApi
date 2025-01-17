# Todo List Application

This is a simple Todo List application built using Express.js for managing tasks. It allows users to create, read, update, and delete (CRUD) tasks stored in a JSON file.

# Project Description

The Todo List application provides an easy way to manage daily tasks. Users can add new tasks, view existing ones, update task details, and delete completed or unnecessary tasks. The application uses a JSON file for data storage.

# Setup Instructions

    Clone the repository using : git clone https://github.com/Joolaoluwa/TodoApi.git

    Install dependencies: npm install

    Run the application: npm run dev

# API Endpoint Documentation

    Add a Todo Item

POST /api/v1/todos

Request Body:

    {
        "title": "Read EMT",
        "description": "Read chapter 3 vector   calculus",
        "completed": false
    }

Response:

    {
        "status": "success",
        "message": "Created todo list successfully",
        "data": {
            "id": "1388de92-50b0-4303-8c64-604a8fc129be",
            "title": "Read EMT",
            "description": "Read chapter 3 vector calculus",
            "completed": false,
            "createdAt": "2025-01-09T15:52:59.631Z"
        }

}

400: Bad request, user didn't meet the requirement of creating a todo item

201 OK: Item created successfully

500 Internal Server Error: Error reading or writing to file

    Get all Todo Items

Get /api/v1/todos

Response:

    {
        "status": "Success",
        "todoData": [
        {
        "id": "1adca9b2-0071-4a7a-b759-995ad772d416",
        "title": "Read controls",
        "description": "Understand the mathematical Model of physical phenomenons",
        "completed": false,
        "createdAt": "2025-01-09T15:32:14.627Z"
        },
        {
        "id": "b8d14141-fbd9-4539-9ce8-5b5df299cc14",
        "title": "Read EMT",
        "description": "Read chapter 3 vector calculus",
        "completed": false,
        "createdAt": "2025-01-09T15:33:06.744Z"
        }
        ]
    }

201 OK: Success

500 Internal Server Error: Internal server error

    Get A Todo Items

Get /api/v1/todos/06a72be2-3ab3-4754-ba93-6f6936be8720

Parameters:

id: id of the todo list

Response:

    {
        "status": "Success",
        "findData": {
            "id": "06a72be2-3ab3-4754-ba93-6f6936be8720",
            "title": "create todo api",
            "description": "Easy backend development project",
            "completed": false,
            "createdAt": "2025-01-08T15:43:38.630Z"
        }

}

201 OK: Success

500 Internal Server Error: Internal server error

    Update a Todo Item

PUT /api/v1/todos/005eea1b-1835-4434-bb99-5e7c68172421

Request Parameters:

id: The ID of the item to update

Request Body:

    {
        "title": "Read EMT",
        "description": "Read chapter 3 vector calculus",
        "completed": true
    }

Response:

    {
        "status": "Successfully updated the file",
        "findData": {
        "id": "005eea1b-1835-4434-bb99-5e7c68172421",
        "title": "Read EMT",
        "description": "Read chapter 3 vector calculus",
        "completed": true,
        "createdAt": "2025-01-09T16:06:37.815Z"
        }
    }

200 OK: Item updated successfully

404 Not Found: Item not found

500 Internal Server Error: Error reading or writing to file

    Delete a Todo Item

DELETE /api/v1/todos/005eea1b-1835-4434-bb99-5e7c68172421

Request Parameters:

id: The ID of the item to delete

Response:
No content response

204 OK: No content

404 Not Found: Item not found

500 Internal Server Error: Error reading or writing to file

Example JSON File (todoList.json)

    [
        {
            "id": "b8d14141-fbd9-4539-9ce8-5b5df299cc14",
            "title": "Read EMT",
            "description": "Read chapter 3 vector calculus",
            "completed": false,
            "createdAt": "2025-01-09T15:33:06.744Z"
        },
        {
            "id": "dc34aadd-9f37-405e-a5a5-6c9453c2a0c0",
            "title": "Read EMT",
            "description": "Read chapter 3 vector calculus",
            "completed": false,
            "createdAt": "2025-01-09T16:02:56.513Z"
        },
        {
            "id": "005eea1b-1835-4434-bb99-5e7c68172421",
            "title": "Read EMT",
            "description": "Read chapter 3 vector calculus",
            "completed": true,
            "createdAt": "2025-01-09T16:06:37.815Z"
        }
    ]

# Link to Hosted API

- Access the live version of the API at: https://todoapi-58oz.onrender.com
