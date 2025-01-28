const express = require("express");
const users = require("./routes/users");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 6000;
app.use(express.json());

const logger =(req,res,next)=>{
    console.log(`${req.method} ${req.url}`);
    next();
}
app.use(logger);
app.use("/users", users);


app.get("/",(req, res) =>{
res.json({port})
})


app.listen(port, () => console.log(`Server started on port ${port}`));
