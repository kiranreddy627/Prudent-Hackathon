const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const itemRoutes = require('./routes/itemRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());


app.listen(process.env.PORT, () => {
    console.log('Server is running on port  ' + process.env.PORT);
});

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.log(error);
});


app.use('/api/users', userRoutes);
app.use('/api/items', itemRoutes);
app.use('/api/categories', categoryRoutes);
