const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('hello rahul mahajan')
});

app.listen(PORT, () => {
    console.log(`app running at http://localhost:${PORT}`);
});