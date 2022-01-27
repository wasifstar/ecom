
import { useState } from "react";
import { Dialog,DialogContent,makeStyles,Box,Button, TextField, Typography, rgbToHex } from "@material-ui/core";
import{authenticateSingup,authenticateLogIn} from "../../service/api";

//wasif mohammad khan
const useStyle = makeStyles({
        component:{
            height:'80vh',
            width:'90vh',
        },
        image:{
            backgroundImage: `url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
            height:'80vh',
            backgroundRepeat:'no-repeat',
            background:"#2870f0",
            width:'44%',
            backgroundPosition:'center 85%',
            padding:'45px', 
            '& > *' :{
                color: '#ffffff',
                fontWeight: 600,
            }

        },
        login:{
            padding:"25px 35px",
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            '& > *':{
                marginTop: 20,
            }
        },
        text:{
                color: '#878787',
                fontSize: 12,
        },
        loginBtn:{
            textTransform:'none',
            backgroundColor: '#fB6418',
            color:'#ffffff',
            height: 48,
            borderRadius: 2,

        },
        resquestBtn:{
            textTransform:'none',
            backgroundColor: '#ffffff',
            color:'#2874f0',
            height: 48,
            borderRadius: 2,
            
            boxShadow: '0 2px 4px 0 rgb(0 0 0 / 20%)',
            
        },
        createText:{
            textAlign: 'center',
            marginTop: 'auto',
            fontSize: 14,
            color: '#2874f0',
            fontWeight: 600,
            cursor: 'pointer',

        },
        error:{
            fontSize: 10,
            color:'#ff6161',
            marginTop: 0,
            fontWeight: 600,
        }

})
  

const initialValaue = {
    login:{
        view: 'login',
        heading: 'Login',
        subHeading:'Get access to your order, Wishlist and Recomendation'

    },
    singup:{
        view: 'signup',
        heading: 'Looks like youre new here!',
        subHeading:'Sign up with your mobile number to get started'

    },
    
}

const signupInitialValue ={
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: '',
}
const loginInitialValue={
    username:'',
    password:''
}
 
const Login = ({open,setOpen,setAccount}) => {
    
    const classes = useStyle();

    const handleClose = () => {
        
        setOpen(false);
        toggleAccount(initialValaue.login);
       
    }
    const [account, toggleAccount] = useState(initialValaue.login);
    const [signup, setSignup]   =  useState(signupInitialValue);

    //login
    const [login,setLogin] = useState(loginInitialValue);
    
    //login user not acces on database
    const [error,setError] = useState(false);

    const toggleUserAccount = () =>{
        toggleAccount(initialValaue.singup);
    }

    //signup button
    const signupUser = async() =>{
                let response = await authenticateSingup(signup);
                if (!response)return;
                handleClose();
                setAccount(signup.username)
    }
//login button
    const loginUser = async() =>{
            let response = await authenticateLogIn(login);
            if(!response){
             setError(true);
                return;
            }
            handleClose();
            setAccount(login.username);     
    }
//signup button
    const onInputChange = (e) =>{
             setSignup({...signup,[e.target.name] : e.target.value});
             console.log(signup);
    }
    //login button
    const onValueChange = (e) =>{
        setLogin({...login,[e.target.name] : e.target.value});
        console.log(login);
    }
 
    return(
     <Dialog open={open} onClose={handleClose}>
         <DialogContent className={classes.component}>
             <Box style={{display:'flex'}}>
                 <Box className={classes.image}>
                     <Typography variant="h5">{account.heading}</Typography>
                     <Typography style={{marginTop:20}}>{account.subHeading}</Typography>

                 </Box>
                 { 
                 account.view === 'login' ?
                 <Box className={classes.login}>
                    <TextField onChange={(e) => onValueChange(e)} name = 'username' label='Enter Email/Mobile number' />
                        <TextField onChange={(e) => onValueChange(e)} name= 'password' label='Enter Password'/>
                        {error && <Typography className={classes.error} >Invalid Username or Password</Typography>}
                        <Typography className={classes.text}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                        <Button variant="contained" onClick={() => loginUser()} className={classes.loginBtn}>Login</Button>
                        <Typography className={classes.text} style={{textAlign:'center'}}>OR</Typography>
                        <Button variant="contained" className={classes.resquestBtn}>Requested OTP</Button>
                        <Typography onClick={() =>toggleUserAccount()} className={classes.createText}>New to Flipkart? Create an account</Typography>
                  </Box>:
                 <Box className={classes.login}>
                        <TextField onChange={(e) => onInputChange(e)} name = 'firstname' label='Enter Firstname' />
                        <TextField onChange={(e) => onInputChange(e)} name= 'lastname' label='Enter Lastname'/>
                        <TextField onChange={(e) => onInputChange(e)} name = 'username' label='Enter Username' />
                        <TextField onChange={(e) => onInputChange(e)} name= 'email' label='Enter Email'/>
                        <TextField onChange={(e) => onInputChange(e)} name = 'password' label='Enter Password' />
                        <TextField onChange={(e) => onInputChange(e)} name= 'phone' label='Enter Phone number'/>                    
                        <Button variant="contained" onClick={() => signupUser()} className={classes.loginBtn}>SingUp</Button>
                        
                 </Box>

                    }           
  
  
             </Box>
         </DialogContent>
     </Dialog>
 )
}
export default Login;