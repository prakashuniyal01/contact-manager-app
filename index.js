const express = require("express");
const connectDB = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
// const Router = require("./routes/contetRoute");


//  mongo db connection 
connectDB();
// express js 
const app = express();

// change the format of data in json 
app.use(express.json());

const PORT = process.env.PORT || 5001;

app.use("/api/contect", require("./routes/contactRoute")); 
// app.get(Router);
// error handler
app.use(errorHandler);


app.listen(PORT, ()=>{
    console.log(`server running on port http://localhost:${PORT}`);
})