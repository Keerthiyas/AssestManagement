const express = require('express');
const connectDB = require('./config/database');
const userRoutes = require('./routes/useroutes');
const app = express();
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.use(express.json());
app.use('/api/users', userRoutes);

connectDB();    
module.exports = app;