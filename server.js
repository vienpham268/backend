const result = require("dotenv").config();

// create server
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const server = require("http").createServer(app);

// config
const port = process.env.SERVER_PORT;
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

server.listen(port, () => {
  console.log(`Server running at port:${port}`);
});
