import {products} from "./constants/product.js";

import product from "./model/modelSchema.js";
//wasif mohammad khan

const defaultData = async () => {
    try{
        await product.deleteMany({});
        await product.insertMany(products);
        
        console.log('data imported successfully');

    }catch(error){
        console.log('error:',error.message);
    }
   
};
export default defaultData;