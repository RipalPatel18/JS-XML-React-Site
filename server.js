require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const methodOverride = require("method-override");

const apiRoutes = require("./routes/api");
const adminRoutes = require("./routes/admin");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Error:", err));

app.set("view engine", "pug");
app.use("/css", express.static("public/css"));

app.use("/admin", adminRoutes);
app.use("/api", apiRoutes);

app.get("/", (req, res) => res.send("API Running"));

app.listen(process.env.PORT, () =>
  console.log(`Backend running at http://localhost:${process.env.PORT}`)
);
