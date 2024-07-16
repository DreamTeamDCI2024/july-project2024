import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

// Initialize the app
const app = express();

// PORT
const PORT = process.env.PORT || 4000;

//Use the json middleware
app.use(express.json());

// Paths
app.get('/hello', (req, res) => {
    console.log(req);

    res.send('Hello, World!');
})

app.listen(PORT, () => console.log(`Server running on ${PORT}`));