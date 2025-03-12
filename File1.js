// Import Express
import express from 'express';

// Initialize the Express application
const app = express();
// Define the port number where the server will run
const port = 3000;

// Show group names
app.get('/', (req, res) => {
    res.send(`
        <h1>Welcome to Our Lab assignment 3</h1>
        <h2>Group Members:</h2>
        <ul>
            <li>Daniela Escobar</li>
            <li>Isabella Mora</li>
            <li>Camilla Uribe</li>
        </ul>
    `);
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
