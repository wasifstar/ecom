
import { Box ,Button,makeStyles} from "@material-ui/core";
import { Typography } from "@mui/material";
import {useNavigate} from 'react-router-dom';
//wasif mohammad khan

const useStyle = makeStyles({
    component:{
        margin:'80px 140px',
        width:'80%',
        background: '#fff',
        height: '65vh'
    },
    image:{
        width :'15%',
    },
    container:{
        textAlign:'center',
        paddingTop: 70,   
    },
   button:{
       marginTop:20,
       padding: '12px 70px',
       borderRadius: 2,
       fontSize: 14,
       background: '#2874f0',
       color: '#fff',
       }

})


export const EmptyCart = () =>{
    const emptycarturl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';

    const classes = useStyle();
    const navigate = useNavigate();
    const addItem = () =>{
        navigate('/');
    }


    return(
        <Box className={classes.component}>
            <Box className={classes.container}>
            <img src={emptycarturl} className={classes.image } />
            <Typography style={{fontSize:14,marginTop:10}}>Your cart is empty</Typography>
            <Typography style={{fontSize:14,marginTop:10}}>Add items to its now.</Typography>
            <Button className={classes.button} variant="contained" onClick={() => addItem()}>Shop now</Button>
            </Box>
        </Box>
    )
}