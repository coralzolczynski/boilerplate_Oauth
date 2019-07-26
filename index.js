const express  = require("express");
const morgan   = require("morgan");
const mongoose = require("mongoose");
const cors     = require("cors");

const app = express(); 

// Data base setup 

mongoose.connect("mongodb://localhost:auth/auth", {useNewUrlParser:true, useCreateIndex:true});

// middleware setup

app.use(morgan("combined"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

// if production serve our clients build folder 
// this folder is creted during produciton only

if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
}

// routes set 

const routes = require("./routes");
app.use(routes); 

const PORT = process.env.PORT || 3001; 

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
