# AWS ECS CI/CD

## Overview
This repository contains the code for the AWS ECS CI/CD pipeline. The pipeline is responsible for building and deploying the application to the ECS cluster.

## Project Structure
- **.github/workflows**: Contains the GitHub Actions workflow files.
- **server**: Contains the backend Node.js application.
- **client**: Contains the frontend code.

## CI/CD Pipeline
The CI/CD pipeline is triggered on pushes to the following branches:
- **`main`**
- Any branch containing the word **`backend`**
- Any branch containing the word **`frontend`**

### Backend Pipeline (`build-and-push-backend` job)
The backend pipeline consists of the following steps:
1. **Checkout code**: Fetch the latest code.
2. **Setup Node.js**: Set up Node.js environment (Node.js version 14).
3. **Install dependencies**: Install project dependencies using npm.
4. **Configure AWS credentials**: Set up AWS credentials for deployment.
5. **Login to Amazon ECR**: Authenticate with Amazon Elastic Container Registry (ECR).
6. **Build, tag, and push image to Amazon ECR**: Build Docker image for the backend, tag it, and push it to ECR.
7. **Fill in the new image ID in the Amazon ECS task definition**: Update the ECS task definition with the new Docker image.
8. **Deploy to Amazon ECS**: Deploy the updated task definition to ECS.

### Frontend Pipeline (`build-and-push-frontend` job)
The frontend pipeline is not implemented in this repository. Contributors are encouraged to follow a similar process as the backend pipeline for testing and deploying the frontend component.

## Usage
To contribute to this project or test the CI/CD pipeline, follow these steps:
1. Clone the repository:
   ```bash
    git clone git@github.com:MEZ901/aws-ecs-ci-cd.git
    ```
2. Make changes or create a new feature branch:
   ```bash
    git checkout -b feature-<feature-name>-backend
    ```
3. Commit and push your changes:
   ````bash
    git add .
    git commit -m "Add new feature"
    git push origin feature-<feature-name>-backend
    ```
4. The CI/CD pipeline will be triggered based on your branch name, and the changes will be deployed to AWS ECS.

## Secrets
Make sure to set the following secrets in your GitHub repository:
- **`AWS_ACCESS_KEY_ID`**: Your AWS access key ID.
- **`AWS_SECRET_ACCESS_KEY`**: Your AWS secret access key.

## Notes
- The backend is deployed to the **`js-service`** service in the **`lacasadeljs`** cluster.
- The ECS task definition is defined in **`task-definition-js.json`**.
