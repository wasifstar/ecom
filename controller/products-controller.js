
import { response } from "express";
import Product from "../model/modelSchema.js";

//wasif mohammad khan
export const getProducts = async(request,response) => {
    try{
       const products = await Product.find({});
       response.json(products);
    }
    catch(error){
        console.log('Error :',error.massage);
    }
    return
}

export const getProductById = async(request,response) =>{ 
    try{
       const product = await Product.findOne({'id': request.params.id});
       response.json(product);
    }catch(error){
        console.log('error :' ,error.massage);
    }
}