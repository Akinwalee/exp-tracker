# Expense Tracking Management System

Overview


The Expense Tracking Management System is a user-centric web application designed to help individuals and businesses track their finances efficiently. The system provides features such as tracking income and expenses, creating and managing budgets, setting savings goals, and monitoring bank behavior in real-time.

Built with modern technologies, this application is scalable, secure, and easy to use, leveraging a microservices architecture for modular functionality and seamless integration of features.

Key Features
	•	User Authentication: Secure account management using JWT-based authentication.
	•	Income and Expense Tracking: Log, categorize, and analyze financial activities.
	•	Budget Management: Create, track, and adjust budgets in real-time.
	•	Savings Goals: Set fixed-period savings goals with live progress updates.
	•	Real-Time Notifications: Receive instant updates on financial activities using Socket.IO.
	•	Bank Behavior Analysis: Gain insights into spending habits and recommendations for better financial decisions.
	•	Payment Integration: Manage transactions with seamless integration of the Paystack API.
	•	Secure API: Features like rate-limiting, input validation, and security headers ensure robust API protection.
	•	Interactive API Documentation: Swagger-based documentation for developers and collaborators.

Technologies Used

Backend
	1.	Node.js with Express.js
	•	Built for scalable network applications with a minimalist framework for RESTful APIs.
	•	Middleware handles routing, security, and logging.
	2.	Socket.IO
	•	Real-time, bidirectional communication for features like notifications and updates.
	3.	MySQL with mysql2/promise
	•	Reliable relational database with Promise-based queries for async/await compatibility.
	4.	JWT (JSON Web Token)
	•	Lightweight and stateless user authentication mechanism for secure API access.
	5.	Swagger
	•	Interactive API documentation with swagger-ui-express for testing and collaboration.
	6.	Paystack API
	•	Payment gateway integration for managing user transactions and subscriptions.
	7.	Security Enhancements
	•	Helmet: Adds security headers.
	•	HPP: Prevents HTTP Parameter Pollution.
	•	XSS-Clean: Mitigates cross-site scripting attacks.
	•	Rate-Limiting: Controls excessive API requests.
	8.	Logging
	•	Morgan: Logs incoming requests and responses for debugging and performance.
	9.	Validation
	•	Validator.js: Ensures data integrity during user registration and updates.
	10.	Environment Configuration
	•	dotenv: Secures sensitive credentials (e.g., database, API keys).

Frontend
	1.	React
	•	Component-based architecture for reusable, dynamic UI elements.
	•	Features such as react-dom ensure smooth rendering of React components.
	2.	Vite
	•	Fast development server with hot module replacement (HMR) for an optimized workflow.
	3.	Dependencies
	•	@heroicons/react: SVG icons for enhancing the UI.
	•	axios: HTTP client for seamless backend communication.
	•	react-circular-progressbar: Visualizes progress for budgets and savings goals.

Project Structure

Frontend Components
	•	Sidebar: Provides navigation across sections of the app.
	•	Overview: Displays a summary of user financial activities.
	•	Savings: Manages and visualizes savings goals.
	•	BudgetManagement: Tracks and adjusts budgets.
	•	ProtectedRoute: Secures access to authenticated routes.
	•	AddIncome: Adds new income entries.
	•	IncomeList: Lists all recorded income.

Setup Instructions

Prerequisites
	•	Node.js
	•	MySQL
	•	Git

Steps to Run Locally
	1.	Clone the Repository

git clone https://github.com/Akinwale/exp-tracking.git  
cd exp-tracking  


	2.	Install Dependencies

npm install  


	3.	Set Up Environment Variables
Create a .env file in the root directory with configurations for:
	•	Database credentials.
	•	Paystack API keys.
	•	JWT secret.
	4.	Start the Application
	•	Backend:

npm run start  


	•	Frontend:

npm run dev  


	5.	Access the Application
	•	Frontend: http://localhost:5173
	•	Backend: http://localhost:5000

Testing the APIs
	1.	Use Swagger UI: Navigate to http://localhost:5000/api-docs.
	2.	Use Postman: Import the API collection and test endpoints.

Development Scripts
	•	dev: Start the development server.
	•	build: Build the application for production.
	•	lint: Run ESLint for code analysis.
	•	preview: Preview the production build locally.

Team Members
	•	Obatula Fuad – Backend Developer
	•	Odunsi Inumidun – Frontend Developer
	•	Cynthia Ihuoma – Backend Developer
	•	Chukwuebuka Okoye – Backend Developer

