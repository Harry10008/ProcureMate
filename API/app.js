import express from 'express';
import bodyParser from 'body-parser';
import fileUpload from 'express-fileupload';
import cors from 'cors';

const app = express();

//to link routers
import UserRouter from './routes/user.router.js'; 
import CategoryRouter from './routes/category.router.js';
import SubCategoryRouter from './routes/subcategory.router.js';

//configuration to fetch req body content : body parser middleware
//used to fetch req data from methods like : POST , PUT , PATCH , DELETE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//to fetch req file content
app.use(fileUpload());

//to resolve cross origin problem
app.use(cors());

//route level middleware to load routers
app.use("/user",UserRouter);
app.use("/category",CategoryRouter);
app.use("/subcategory",SubCategoryRouter);

app.listen(3001);
console.log("server invoked at link http://localhost:3001");

