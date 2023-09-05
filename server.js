const express = require('express');
const app = express();
const port = 3000; // You can change the port if needed

// Serve static files (HTML, CSS, JavaScript, etc.) from a directory
app.use(express.static('Public'));

// Define your routes here
app.get('index.html', (req, res) => {
    res.send('index.html');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
