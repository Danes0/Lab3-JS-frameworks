// Import Express
import express from 'express';

// Import the JSON file using the "with" assertion (for newer versions of Node.js)
import data from './data/makeup.json' with { type: 'json' };

// Initialize the Express application
const app = express();
// Define the port number where the server will run
const port = 3000;

/*
    Define a GET route to fetch all makeup products.
    - This route listens at "/makeup".
    - When accessed, it responds with the entire JSON dataset.
*/
app.get('/makeup', (req, res) => {
    res.json(data); // Send the JSON data as the response
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/makeup`);
});
