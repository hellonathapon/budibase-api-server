const express = require("express");
const app = express();
const cors = require("cors");
const errorHandler = require("./error/errorHandler");

// HANDLE MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// HANDLE ROUTES
app.use("/auth/login", require("./routes/auth/login"));
app.use("/auth/register", require("./routes/auth/register"));

// ERROR HANDLE
app.use(errorHandler);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
