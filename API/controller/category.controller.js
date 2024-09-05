import '../models/connection.js';
import url from 'url';
import path from 'path';
import rs from 'randomstring';

import CategorySchemaModel from '../models/category.model.js';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const save=async (req,res)=>{
 var cList=await CategorySchemaModel.find();
 var l=cList.length;
 var _id=l==0?1:cList[l-1]._id+1;

 var caticon=req.files.caticon;
 var caticonnm=rs.generate()+"-"+Date.now()+"-"+caticon.name;
 var uploadpath=path.join(__dirname,"../../UI/public/assets/uploads/caticons",caticonnm);

 var cDetails={...req.body,"caticonnm":caticonnm,"_id":_id};
 try{
  await CategorySchemaModel.create(cDetails);
  caticon.mv(uploadpath);
  res.status(201).json({"status":true});
 }
 catch(error){
  res.status(500).json({"status":false});
 }
};

export var fetch=async(req,res)=>{
 var condition_obj=url.parse(req.url,true).query;    
 var cList=await CategorySchemaModel.find(condition_obj);
 if(cList.length!=0)
  res.status(200).json(cList);
 else
  res.status(404).json({"status":"Resource not found"});
};
  
export var update=async(req,res)=>{
    let cDetails = await CategorySchemaModel.findOne(req.body.condition_obj);
    if(cDetails){
        let user=await CategorySchemaModel.updateOne(req.body.condition_obj,{$set:req.body.content_obj});   
        if(user)
          res.status(200).json({"status":"success"});
        else
          res.status(500).json({"status": "Server Error"});
    }
    else
      res.status(404).json({"status":"Requested resource not available"});       
};

export var deleteCategory=async(req,res)=>{
    let cDetails = await CategorySchemaModel.findOne(req.body.condition_obj);
    if(cDetails){
        let c=await CategorySchemaModel.deleteOne(req.body.condition_obj);   
        if(c)
          res.status(200).json({"status":"success"});
        else
          res.status(500).json({"status": "Server Error"});
    }
    else
      res.status(404).json({"status":"Requested resource not available"});     
};    