import express from "express";
import mongoose from "mongoose";
import contactRouter from "./routers/contacts-router.js";
const app = express();
const port = 5000;
const json = express.json();
app.use(json);

(async () => {
    await mongoose.connect('mongodb://localhost:27017/Project');
})();


app.listen(port, ()=> console.log(`Server is listening port ${port}`));

app.use(contactRouter);







// app[method] ([address, controller(req, res)])