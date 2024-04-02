const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

let addCount = 0;
let updateCount = 0;

app.use(bodyParser.json());


app.post('/api/add', (req, res) => {
    addCount++;
    const newData = req.body;
    res.status(200).send('Data added successfully');
});

app.put('/api/edit', (req, res) => {
    updateCount++;
    res.status(200).send('Data updated successfully');
});


app.get('/api/count', (req, res) => {
    res.status(200).json({ addCount, updateCount });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
