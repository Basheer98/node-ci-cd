CI/CD Pipeline: Node.js App with Docker & Render

A Node.js application demonstrating Continuous Integration & Deployment (CI/CD) using GitHub Actions, Docker, and Render.

📌 Live Demo

🔗 https://node-ci-cd-app-latest.onrender.com

Features

•	CI/CD Pipeline with GitHub Actions
•	Dockerized App for easy deployment
•	Auto Deployment to Render on push
•	Modern UI with TailwindCSS

Quick Setup
    	
     	Clone the Repository
    	git clone https://github.com/Basheer98/node-ci-cd.git
	cd node-ci-cd

Install Dependencies
	
 	npm install

Run Locally
	
 	node server.js

Open http://localhost:3000 in your browser!

Docker Setup

	docker build -t basheer998/node-ci-cd-app .

Run Container

	docker run -p 3000:3000 basheer998/node-ci-cd-app

Now open http://localhost:3000 in your browser.

CI/CD with GitHub Actions

1️⃣ Push Changes to GitHub

Every time you push changes, GitHub Actions will:

•	Build the Docker image
•	Push it to Docker Hub
•	Trigger a deployment on Render

    	git add .
	git commit -m "Updated UI & fixed deployment issues"
	git push origin main

Check GitHub Actions

Go to GitHub → Actions Tab and verify the pipeline.

🚀 Deployment to Render

1️⃣ Manually Deploy Latest Image

1.	Go to Render Dashboard
2.	Select node-ci-cd-app:latest
3.	Click “Manual Deploy” → “Clear Cache & Redeploy”

2️⃣ Automatic Deployment

Whenever you push to GitHub, Render automatically pulls the latest Docker image and redeploys.

 	Technologies Used
Tech			Purpose
Node.js	Backend 	Framework
Express.js		Lightweight API Server
Docker			Containerization
Render			Deployment Platform
GitHub Actions		CI/CD Pipeline
TailwindCSS		Modern UI Styling
