

import { useState,useContext } from 'react';

import Box from '@mui/material/Box';
import {makeStyles,Button,Typography,Badge} from '@material-ui/core';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from 'react-router-dom';


//wasif mohammad khan

//component
import Login from '../login/Login';
import {LoginContext} from '../../context/ContextProvider'
import Profile from './Profile';
import { useSelector } from 'react-redux';

export function ButtonAppBar() {
    
  const useStyle = makeStyles(theme =>({
      login:{
        backgroundColor: '#ffffff',   
        color: "#2804f4",
        textTransform: 'none',
        fontWeight: 600,
        borderRadius: 2,
        padding: '5px 40px',
        boxShadow: 'none',
        [theme.breakpoints.down('sm')]:{
          background:'#2874f0',
          color:'#ffffff',
          display: 'flex',
          alignItems:'center',
          flexDirection:'column',
        }
      },
      wrapper:{
        margin: '0 7% 0 auto',
        display: 'flex',
        
        '& > *': {
          marginRight: 50,
          fontSize: 12,
          alignItems: 'center',
          color:'#fff',
          textDecoration:'none',
          [theme.breakpoints.down('sm')]:{
            color:'#2874f0',
            alignItems:'center',
            display:'flex',
            flexDirection:'column',
            marginTop: 5,
          }
          
        },
        [theme.breakpoints.down('sm')]:{
          display:'flex',
          alignItems:'center',
          flexDirection:'column',
        }
        
      },
      logins:{
        fontSize: 12,
        marginRight: 50,
        marginLeft:10,
        [theme.breakpoints.down('sm')]:{
          display:'flex',
          alignItems:'center',
          flexDirection:'column',
          color:'#2874f0',
        }
        
        
        
      },
      cardIcon:{
        [theme.breakpoints.down('sm')]:{
          color:'#2874f0',
        }
      },

      container:{
        display: 'flex',
        color:'#fff',
        textDecoration:'none',
        [theme.breakpoints.down('sm')]:{
          display:'block',
        }
        
      } 
      
  }));
  const classes = useStyle();

  const {cartItems} = useSelector(state => state.cart);
  
  const [open,setOpen] = useState(false);
  const{account, setAccount} = useContext(LoginContext);


  const openLoginDialog = () =>{
    setOpen(true);
  }
  
  return (
      

    <Box className={classes.wrapper}>
          
          
          { 
          account ? <Profile account = {account} setAccount = {setAccount} /> :
                 <Link to = ''> 
                  <Button color="inherit" onClick={()=> openLoginDialog()} variant="contained" className={classes.login}>Login</Button>
                  </Link>
          
          }
          
          <Link to = ''><Typography style={{marginTop: 4,fontSize: 14}}>More</Typography></Link>
         
          <Link to = '/cart' className={classes.container}>
          <Badge badgeContent={cartItems.length} color="primary"> 
          <ShoppingCartIcon className={classes.cardIcon}/>
          </Badge>
              <Typography className={classes.logins} >Cart</Typography>
          </Link>
          <Login open = {open} setOpen={setOpen} setAccount={setAccount} />
    </Box>
  );
}
export default ButtonAppBar;