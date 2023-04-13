const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 8080;

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to my application.' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
