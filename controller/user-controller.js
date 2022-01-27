//wasif mohammad khan

import User from "../model/userSchema.js";
export const usersignup = async(request,response) =>{

try{
    const exist = await  User.findOne({username: request.body.username});
    if(exist){
        return response.status(401).json('user already exits');
    }

    const user= request.body;

    const newUser = new User(user); 
    await newUser.save();

    response.status(200).json('user is successfully registered');
}catch(error){
    console.log('Error:' ,error.message);
}
   return "hello";
}
//login
export const userLoginIn = async(request,response) => {
try{
    let user = await User.findOne({username: request.body.username, password: request.body.password});
    if(user){
    return response.status(200).json(`${request.body.username} login successfull`);
    }
    else{
        return response.status(401).json('invailid login');
    }
}catch(error){
    console.log('error :',error.message);
}

}
