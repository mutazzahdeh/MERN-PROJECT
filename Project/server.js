const express = require("express");
const socket = require("socket.io");
const app = express();
const cors = require("cors");
require('./server/config/mongoose.config')
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
require('./server/routes/route.routes')(app);

const server = app.listen("8000", () => {
  console.log("Server Running on Port 8000...");
});

io = socket(server);


io.on("connection", socket =>{
  
    console.log("A new user has joined");
    socket.emit("Welcome", "hiiii");
    
});
