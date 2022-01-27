import { Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import {ShoppingCart as Cart,FlashOn as Flash} from '@mui/icons-material';

import { addToCart } from "../../redux/actions/cartAction";
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { payUsingPaytm } from "../../service/api";
import {post} from "../../utils/paytm";

//wasif mohammad khan
const useStyle = makeStyles(theme => ({
    LeftContainer:{
        minWidth:'40%',
        padding: "40px 0 0 40px",
        [theme.breakpoints.down('md')]:{
            padding:'20px 40px',
        }
    },
    image:{
        padding:"15px 20px",
        border:"1px solid #f0f0f0",
        width: '95%'
    },
    button:{
        height: 50,
        width: "46%",
        borderRadius: 2,
    },
    addToCard:{
        background:'#ff9f00',
        color:'#fff',
        marginRight: 10,
    },
    buyNow:{
        background:'#fb641b',
        color:'#fff'
    }

}));
const ActionItems = ({product}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();


        
    
    const addItemToCart = () =>{
        dispatch(addToCart(product.id));
        navigate('/Cart');
    }

    const buyNow = async () => {
            let  response = await payUsingPaytm({amount: 500, email: 'wasifstarzed@gmail.com'});
            let information = {
                action :"https://securegw-stage.paytm.in/order/process", 
                params : response,
            }

            post(information);
    }

const classes = useStyle(); 
    
    return(
        <Box className={classes.LeftContainer}>
            <img src={product.detailUrl} className={classes.image}/><br/>
            <Button onClick = {() => addItemToCart()} variant="contained" className={clsx(classes.button,classes.addToCard)}><Cart/>Add to Cart</Button>
            <Button onClick={() => buyNow()} variant="contained" className={clsx(classes.button,classes.buyNow)}><Flash />Buy Now</Button>
        </Box>
    )
}

export default ActionItems;