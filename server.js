const express = require('express');
const cors = require('cors');
const productRouter = require('./routes/productRouter');

const PORT = process.env.PORT || 8080;
var corsOptions = {
    origin: "http://localhost:8081"
};

// Middleware
const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/products', productRouter);

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to my application.' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
