# Task Manager API - Serverless

## Overview
This project is a serverless RESTful API for task management, built with Node.js, AWS Lambda, AWS DynamoDB, Serverless. It allows users to create, read, update, and delete tasks. The API is designed with clean architecture, ensuring clear separation of concerns and ease of maintenance.

## Features
- Create, read, update, and delete tasks.
- Serverless architecture using AWS Lambda and API Gateway.
- Data persistence with AWS DynamoDB.
- Clear and organized folder structure.

## Getting Started
### Prerequisites
- Node.js
- npm or yarn
- AWS CLI
- Serverless Framework

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/davidhernandezeverdax/task-manager-api-serverless.git

2. Navigate to the project directory:
   ```bash
   cd task-manager-api-serverless

3. Install dependencies:
   ```bash
   npm install

### Configuration 
1. Set up AWS credentials:
   ```bash
   serverless config credentials --provider aws --key <YOUR_ACCESS_KEY> --secret <YOUR_SECRET_KEY>

2. Update the serverless.yml file with your AWS configuration details.

### Deployment
1. Execute
    ```bash
   serverless deploy


### Endpoints
POST /tasks: Create a new task.
GET /tasks/{id}: Retrieve a specific task.
PUT /tasks/{id}: Update a specific task.
DELETE /tasks/{id}: Delete a specific task.
