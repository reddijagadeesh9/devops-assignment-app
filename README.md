#  DevOps Assignment - Case 1

## Serverless Containerized Application Deployment on AWS

---

##  Project Overview

This project demonstrates the deployment of a containerized Node.js application using AWS DevOps services.
The application is deployed using ECS Fargate, exposed via Application Load Balancer, and accelerated using CloudFront CDN.
A complete CI/CD pipeline is implemented using GitHub, AWS CodePipeline, and CodeBuild.

---

##  Architecture

```
User
 ↓
CloudFront (CDN + HTTPS)
 ↓
Application Load Balancer (ALB)
 ↓
ECS Fargate (Containers)
 ↓
ECR (Docker Images)

GitHub → CodePipeline → CodeBuild → ECR → ECS
```

---

##  Technologies Used

* Node.js
* Docker
* AWS ECS Fargate
* AWS ECR
* AWS Application Load Balancer
* AWS CloudFront (CDN + HTTPS)
* AWS CodePipeline
* AWS CodeBuild
* GitHub

---

##  Application Features

* Health Check Endpoint (`/health`)
* Login API (`/login`)
* Protected Items API (`/items`)
* JWT Authentication implemented

---

##  Implementation Steps

### 1. Application Development

* Created Node.js application with required endpoints
* Implemented JWT authentication

### 2. Dockerization

* Created Dockerfile
* Built Docker image

### 3. ECR Setup

* Created repository in AWS ECR
* Pushed Docker image

### 4. ECS Deployment

* Created ECS cluster (Fargate)
* Created task definition
* Created service with load balancer

### 5. Load Balancer Setup

* Configured ALB with target group
* Health check configured (`/health`)

### 6. CI/CD Pipeline

* Integrated GitHub repository
* Created CodeBuild project using `buildspec.yml`
* Created CodePipeline:

  * Source → GitHub
  * Build → CodeBuild
  * Deploy → ECS

### 7. CDN Setup

* Created CloudFront distribution
* Origin set to ALB
* Enabled HTTPS via CloudFront

---

##  Application URLs

### CloudFront URL (Primary)

```
https://d331xesaqyfin5.cloudfront.net
```

### Health Check

```
https://d331xesaqyfin5.cloudfront.net/health
```

---

##  Testing

### Health Endpoint

```
GET /health → OK
```

### Login API

```
POST /login
Body:
{
  "username": "admin",
  "password": "password"
}
```

### Items API

```
GET /items
Authorization: Bearer <token>
```

---

## Security Features

* HTTPS enabled via CloudFront
* Secure access using Security Groups
* JWT-based authentication for APIs
* Backend services protected behind ALB

---

##  Note

```
Root endpoint (/) returns "Cannot GET /" as no route is defined.
This is expected behavior.
```

---

##  Result

* Successfully deployed a scalable containerized application
* Implemented automated CI/CD pipeline
* Enabled secure and fast delivery using CDN
* Achieved production-level DevOps architecture

---

##  Author

REDDI JAGADEESWARA RAO
📞 9618505622

---
