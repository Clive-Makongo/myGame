const express = require('express');
const path = require('path'); // Import the path module
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Use an absolute path
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
