require('dotenv').config();

const express = require('express');
const connectDB = require('./config/database');

const userRoutes = require('./routes/useroutes');
const categoryRoutes = require('./routes/category.routes');
const vendorRoutes = require('./routes/vendor.routes');
const assignmentRoutes = require('./routes/assignment.routes');
const maintenanceRoutes = require('./routes/maintenance.routes');
const purchaseRoutes = require('./routes/purchase.routes');
const assestRoutes = require('./routes/assest.routes');
const authRoutes = require('./routes/auth.routes');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/vendors', vendorRoutes);
app.use('/api/assignment', assignmentRoutes);
app.use('/api/maintenance', maintenanceRoutes);
app.use('/api/purchase', purchaseRoutes);
app.use('/api/assest',assestRoutes);
app.use('/api/auth',authRoutes);

// Connect to DB and start server
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
