// Import Express
import express from 'express';
// Import the File System (fs) module
import fs from 'fs';
// Import the JSON file using "with" assertion (for newer Node.js versions)
import data from './data/makeup.json' with { type: 'json' };

// Initialize the Express application
const app = express();
// Define the port number where the server will run
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

/*
    GET: Retrieve all makeup products
    - This route listens at "/makeup".
    - It responds with the full JSON dataset.
*/

app.get('/makeup', (req, res) => {
    res.json(data); // Send the JSON data as the response
});

//POST: Create a new makeup product
app.post('/makeup', (req, res) => {
    // Get the new product data from the request body
    const { name, brand, price, description } = req.body;

    // Assign a new unique ID
    const newProduct = {
        id: data.length + 1, // Ensure ID is the first property
        name,
        brand,
        price,
        description
    };

    // Add the new product to the dataset
    data.push(newProduct);

    // Update the JSON file with the new data
    fs.writeFileSync('./data/makeup.json', JSON.stringify(data, null, 2));

    res.status(201).json({ message: 'Product added successfully', newProduct });
});

// PUT: Update an existing makeup product
app.put('/makeup/:id', (req, res) => {
    // Convert the "id" from string to number
    const productId = parseInt(req.params.id);
    // Find the product index
    const productIndex = data.findIndex(p => p.id === productId);

    if (productIndex !== -1) {
        // Update the product details
        data[productIndex] = { ...data[productIndex], ...req.body };

        // Write the updated data to the JSON file
        fs.writeFileSync('./data/makeup.json', JSON.stringify(data, null, 2));

        res.json({ message: 'Product updated successfully', updatedProduct: data[productIndex] });
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

// DELETE: Remove a makeup product
app.delete('/makeup/:id', (req, res) => {
    // Convert "id" to a number
    const productId = parseInt(req.params.id);
    // Remove the selected product
    const newData = data.filter(p => p.id !== productId);

    if (newData.length !== data.length) {
        // Write the updated data back to the JSON file
        fs.writeFileSync('./data/makeup.json', JSON.stringify(newData, null, 2));

        res.json({ message: 'Product deleted successfully' });
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/makeup`);
});
