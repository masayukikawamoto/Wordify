const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
require("dotenv").config();
const db_url = import.meta.env.VITE_DB_URL
const port = import.meta.env.VITE_PORT

const corsOptions = {
  origin: "https://wordify-app.onrender.com",
};

app.use(express.json());
app.use(cors(corsOptions));

mongoose.connect(db_url).then(() => {
  const PORT = port || 8000;
  app
    .listen(PORT, () => {
      console.log(`App is Listening on PORT ${PORT}`);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/", (req, res) => {
  res.status(201).json({ message: "Connected to Backend!" });
});
