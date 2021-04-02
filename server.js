 const express = require("express");
 const path = require("path");
 const http = require("http");
 const mongoose = require("mongoose");
 const bodyParser = require("body-parser");


 require("dotenv").config({
   path: path.join(__dirname, ".env"),
 });
 
 const apiRoute = require("./routers");
 
 const app = express();
 
 let port = "3000";
 
 app.set("port", port);
 
 mongoose
   .connect(process.env.DB_URL_DEV, {useNewUrlParser: true, useUnifiedTopology: true})
   .then(() => {
     console.log("DB Connected");
   })
   .catch((err) => {
     console.log("Not Connected to Database ERROR! ", err);
   });


app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use("/api", apiRoute);
 
 const server = http.createServer(app);

 server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});