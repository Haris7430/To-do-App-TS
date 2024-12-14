import express from 'express';
import mongoose from 'mongoose';
import router from  "./router";
import dotenv from "dotenv";
import path = require("path");


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended:true}));


//router
app.use('/',router);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'../views'));


//mongo connection
mongoose.connect('mongodb://localhost:27017/Todo', {
  }).then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));


// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });