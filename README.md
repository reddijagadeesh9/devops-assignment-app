#  Case 1: Serverless Dockerized Application (AWS)

##  Overview

This project demonstrates deployment of a secure, scalable containerized application using AWS serverless services. The application is built using Node.js and deployed using ECS Fargate with a complete CI/CD pipeline.

---

##  Architecture

```
User → CloudFront (CDN + HTTPS)
        ↓
Application Load Balancer (ALB)
        ↓
ECS Fargate (Private Subnets)
        ↓
Docker Container (Node.js App)
        ↓
Amazon ECR (Image Registry)
```

---

##  Technologies Used

* AWS ECS Fargate (Serverless Containers)
* AWS ECR (Container Registry)
* AWS CodePipeline & CodeBuild (CI/CD)
* AWS Application Load Balancer
* AWS CloudFront (CDN + HTTPS)
* Amazon VPC (Private Networking)
* Node.js (Express Application)
* Docker

---

##  Application Features

* `/health` → Health check endpoint (used by ALB)
* `/login` → Returns authentication token (mock login)
* `/items` → Protected endpoint (requires token)

###  Authentication Flow

1. User sends request to `/login`
2. Server validates credentials (mock)
3. JWT/Bearer token is generated
4. Token is used to access `/items`

---

##  CI/CD Pipeline

CI/CD is implemented using AWS services:

1. Code pushed to GitHub
2. CodePipeline triggers automatically
3. CodeBuild:

   * Builds Docker image
   * Tags image
   * Pushes to ECR
4. ECS Service:

   * Pulls latest image
   * Deploys new version automatically

---

##  Security Implementation

The following security best practices are implemented:

### 1. Network Isolation

* ECS tasks run inside **private subnets**
* No direct public access to containers

### 2. TLS/HTTPS

* CloudFront provides HTTPS access
* Ensures encrypted communication

### 3. Security Groups

* ALB allows inbound traffic (HTTP/HTTPS)
* ECS allows traffic only from ALB

### 4. DDoS Protection

* AWS Shield (default) enabled
* CloudFront provides additional protection

### 5. Controlled Access

* Application endpoints protected using token-based authentication

---

##  CDN Integration

* CloudFront is configured in front of ALB
* Improves performance using caching
* Separates cached and dynamic requests

---

##  Proof of Implementation

The following screenshots are included in the `proofs/` folder:

* ECS Cluster & Service (Running)
* Task status (Healthy)
* Load Balancer configuration
* Target Group health checks
* CodePipeline execution success
* CodeBuild logs
* ECR repository & image
* CloudFront distribution
* Application output (`/health`, `/login`, `/items`)

---

##  Setup Instructions

1. Clone repository
2. Build Docker image:

   ```bash
   docker build -t devops-app .
   ```
3. Push image to ECR
4. Deploy using ECS Fargate
5. Configure ALB and target group
6. Attach CloudFront distribution
7. Access application via CloudFront URL

---

##  Testing

### Health Check

```
GET /health
Response: OK
```

### Login

```
POST /login
Returns: Token
```

### Protected Endpoint

```
GET /items
Header: Authorization: Bearer <token>
```

---

##  Cost Considerations

* ECS Fargate: Pay per usage
* ALB: Hourly cost
* CloudFront: Based on data transfer
* ECR: Storage cost

Cost can be optimized by:

* Using smaller task sizes
* Auto scaling
* Deleting unused resources

---

##  Limitations

* Authentication is mock-based (not production-ready)
* ALB is publicly accessible (can be improved with WAF/IAM auth)
* No rate limiting implemented

---

##  Conclusion

This implementation demonstrates:

* Containerization using Docker
* Serverless deployment using ECS Fargate
* Automated CI/CD pipeline
* Secure networking and HTTPS
* CDN integration for performance

---

##  Author

REDDI JAGADEESWARA RAO
📞 9618505622
EMAIL : reddijagadeesh9@gmail.com
