const express = require('express');
const connectDB = require('./config/database');
const userRoutes = require("./routes/useroutes");
const categoryRoutes = require("./routes/category.routes");
const vendorRoutes = require("./routes/vendor.routes");
const userRoutes = require("./routes/user.routes");
const assignmentRoutes = require('./routes/assignment.routes');
const maintenanceRoutes = require('./routes/maintenance.routes.js');
const purchaseRoutes = require('./routes/purchase.routes');
const assestRoutes = require('./routes/assest.routes')
const authRoutes = require("./routes/auth.routes");
const dashboardRoutes = require("./routes/dashboard.routes.js");
const app = express();
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/vendors", vendorRoutes);
app.use("/api/users",userRoutes);
app.use("/api/assignment",assignmentRoutes);
app.use("/api/maintenance",maintenanceRoutes);
app.use("/api/purchase",purchaseRoutes);
app.use("/api/assest",assestRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/dashboard", dashboardRoutes);
connectDB();    
module.exports = app;