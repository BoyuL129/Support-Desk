const express = require("express");
const colors = require("colors");
const PORT = process.env.PORT || 5000;
const dotenv = require("dotenv").config();

// routes
const userRoutes = require("./routes/userRoutes");
const errorHandler = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");

// connect to DB
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello");
});

// routes
app.use("/api/users", userRoutes);
app.use(errorHandler);

app.listen(PORT, () => console.log(`server started on ${PORT}`));
