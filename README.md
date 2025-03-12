# Lab 3 - JavaScript Frameworks (Node.js & Express API)

This project demonstrates the use of Node.js and Express.js to create a RESTful API that performs CRUD operations on a dataset of makeup products.

**🚀 Features**
- Express.js server setup
- CRUD operations (Create, Read, Update, Delete) on makeup products
- JSON data storage using makeup.json
- Nodemon for automatic server restarts in development
- API tested with Postman

**📂 Project Structure**

For this assignment, we created a folder named "Lab3-JS-frameworks", which serves as the project directory for our Node.js application. 
Inside this folder, we structured our project with the following files and directories:

1.	File1.js: The main entry point of the application, responsible for setting up the Express server and handling the root route, which displays group member names.
2.	File2.js: A secondary script that imports and serves JSON data through an API endpoint using Express, allowing users to fetch makeup product data.
3.	File3.js: Implements CRUD operations (Create, Read, Update, Delete) using Express to manage the makeup product data stored in makeup.json. It enables modifications to the dataset via API requests using tools like Postman.
4.	package.json: A required configuration file that manages dependencies, defines startup scripts, and ensures ES module compatibility.
5.	makeup.json (inside the data/ folder): A JSON file containing structured makeup product data, used by File2.js to demonstrate API functionality and File3.js to handle modifications through CRUD operations.
6.	node_modules: A directory that was automatically created when installing dependencies via npm install. It contains all the required packages for the project.
