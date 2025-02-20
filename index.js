const express = require("express");
const app = express();

// Middleware to set headers for all responses
app.use((req, res, next) => {
  res.setHeader("X-Powered-By", "AWS ECR, ECS & Docker Pipeline");
  next();
});

// Home Route
app.get("/", (req, res) => {
  res.send(`
    <h1>Welcome to My App!</h1>
    <p>🚀 This app is running through a robust AWS infrastructure, powered by AWS Elastic Container Registry (ECR), Amazon Elastic Container Service (ECS), and Docker for smooth deployment pipelines.</p>
  `);
});

// Info Route
app.get("/info", (req, res) => {
  res.send(`
    <h2>/info API</h2>
    <p>This API endpoint is part of the cloud-powered stack running on AWS ECR, ECS, Docker, and a Load Balancer for high availability and scalability.</p>
  `);
});

// Listening on port 3000
app.listen(3000, () => {
  console.log("⚡️ App is live and listening on port 3000 with Load Balancer for seamless traffic distribution.");
});
