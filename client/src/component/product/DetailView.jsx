import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProductDetails } from "../../redux/actions/productsAction";
import { useParams } from "react-router-dom";
import { Box,makeStyles, Table, TableBody, TableCell, TableRow, Typography,Grid } from "@material-ui/core";

import clsx from 'clsx';
import {LocalOffer as Badge} from "@material-ui/icons";

//component
import ActionItems from "./ActionItems";

//wasif mohammad khan
const useStyle = makeStyles(theme => ({
    component: {
        marginTop: 55,
        background: "#f2f2f2",
    },
    container: {
        //margin : "0 80px",
        background: "#fff",
           display: 'flex',
        [theme.breakpoints.down('md')]:{
        margin:'0'
        }
    },
    rightContainer:{
        marginTop: 50, 
        '& > *' : {
            marginTop: 10,
            
        },
       
    },
    smallText: {
        fontSize: 14,
        verticalAlign:"baseline",
        '& > *':{
            fontSize: 14,
            marginTop: 10,
        }
    },
    grayTextColor:{
        color:'#878787',
    },
    price:{
        fontSize: 28,
    },
    badge:{
        fontSize: 14,
        marginRight: 10,
        color:'#00CC00',
    }
}));


 
const DetailView = () => {

    const classes = useStyle();
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const sellerURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

  const { id } = useParams();
  const { product } = useSelector((state) => state.getProductDetails);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch,id]);

//date formate
const date = new Date(new Date().getTime() +(5*24*60*60*1000) );  
  return (
    <Box className={classes.component}>
        {product && Object.keys(product).length &&
       
      <Grid container className={classes.container} >
        
        <Grid item lg={4} md={4} sm={8} xs={12}>
            
               <ActionItems product={product} />
            

        </Grid>
        <Grid item lg={8} md={8} sm={8} xs={12} className={classes.rightContainer}>
                <Typography>{product.title.longTitle}</Typography>
                <Typography className={clsx(classes.smallText,classes.grayTextColor)}>
                    5 Raiting & 1 Review
                    <span><img src={fassured} style={{width: 77, marginLeft: 20 }}/></span>
                </Typography>
                <Typography>
                    <span className={classes.price}>₹{product.price.cost}</span> &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className={classes.grayTextColor}><strike>₹{product.price.mrp}</strike></span> &nbsp;&nbsp;&nbsp;&nbsp;
                    <span style={{color:'#388E3C'}}>{product.price.discount} off</span>
                </Typography>
                <Typography style={{marginTop: 20,fontWeight: 600}}>Available Offer</Typography>
                <Box className={classes.smallText}>
                    <Typography><Badge className={classes.badge}/>Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit CardT&C</Typography>
                    <Typography><Badge className={classes.badge}/>Bank OfferFlat ₹75 off on first Flipkart Pay Later order of ₹500 and aboveT&C</Typography>
                    <Typography><Badge className={classes.badge}/>Special PriceExtra ₹2500 off(price inclusive of discount)T&C</Typography>
                    <Typography><Badge className={classes.badge}/>FreebieFree ₹100 Cashback - ZebPayT&C</Typography>
                </Box>
                <Table>
                    <TableBody>
                        <TableRow className={classes.smallText}>
                            <TableCell className={classes.grayTextColor}>Delivery</TableCell>
                            <TableCell style={{fontWeight:600}}>{date.toDateString()} | ₹40</TableCell>
                        </TableRow>
                        <TableRow className={classes.smallText}>
                            <TableCell className={classes.grayTextColor}>Warranty</TableCell>
                            <TableCell>No Warranty</TableCell>
                        </TableRow>
                        <TableRow className={classes.smallText}>
                            <TableCell className={clsx(classes.smallText,classes.grayTextColor)}>Seller</TableCell>
                            <TableCell className={classes.smallText}>
                                <span style={{color:'#2874f0'}}>SuperCumNet</span>
                                <Typography>GST invoice Available</Typography>
                                <Typography>14 Days Return Policy</Typography>
                                <Typography>View More Seller Starting from 300rs</Typography>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}><img src={sellerURL} style={{width:390}} />
                            </TableCell>
                            
                        </TableRow>
                        <TableRow className={classes.smallText}>
                            <TableCell className={classes.grayTextColor}>Description</TableCell>
                            <TableCell>{product.description}</TableCell>
                        </TableRow>
                        
                    </TableBody>
                </Table>
            
            </Grid>
      </Grid>
        }
    </Box>
  );
};
export default DetailView;








