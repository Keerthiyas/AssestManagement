require("dotenv").config();
const express = require("express");

const connectDB = require("./config/database");

const userRoutes = require("./routes/useroutes");
const categoryRoutes = require("./routes/category.routes");
const vendorRoutes = require("./routes/vendor.routes");

const app = express();

// Middleware
app.use(express.json());

// Connect Database
connectDB();

// Routes
app.use("/api/users", userRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/vendors", vendorRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});