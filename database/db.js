
import mongoose from 'mongoose';

const connection = async(URL) =>{
    //LOCAL TO GLOBAL
    //const URL =`mongodb+srv://${username}:${passsword}@cluster0.0q4ne.mongodb.net/Cluster0?retryWrites=true&w=majority`
    try{
          await mongoose.connect(URL, { useNewUrlParser: true }, { useUnifiedTopology: true }, { useFindAndModify: false })
            console.log('DatBase connected Sucssesfully')
    }catch(error){
        console.log('error :', error.message);
    }

}

export default connection;