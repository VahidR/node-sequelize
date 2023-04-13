const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');

// Configs
const PORT = process.env.PORT || 3000;
var corsOptions = {
    origin: "http://localhost:3000"
};

// Middleware
const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/products', productRoutes);

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to my application.' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
