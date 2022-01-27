


import axios from 'axios';
//wasif mohammad khan
//const url = 'http://localhost:8000';
const url = ''; 

export const authenticateSingup = async(user) => {
    try{
    return await axios.post(`/signup`,user);
    }catch(error){
        console.log('error while calling singup api',error);
    }
}



export const authenticateLogIn = async(user) =>{
    try{
        return await axios.post(`/login`,user);
    }
    catch(error)
    {
        console.log('error while colling login api',error);
    }

}

export  const payUsingPaytm = async (data) =>{
    try{
        let response = await axios.post(`/payment`,data);
        return response.data;
    }catch(error){
        console.log('Error while colling paytm api',error)

    }
}
