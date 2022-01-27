
import { Box,makeStyles } from "@material-ui/core";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProducts as listProducts } from "../../redux/actions/productsAction";

//COMPONENT
import Banner from "./Banner";
import NavBar from "./NavBar";
import Slide from "./Slide";

import MidSection from "./MidSection";
//import { products } from "../../constant/data";

//wasif mohammad khan


//import React from "react";

const useStyle = makeStyles(Theme => ({
    component: {
        padding : 10,
        backgroundColor : '#f2f2f2f2'
    },
    leftComponent:{
        width:'83%',
        [Theme.breakpoints.down('md')]:{
            width: '100%',
        }
    },
    rightWrapper:{
        background:"#ffffff",
        padding: 5,
        margin: "12px 0 0 10px",
        width: '17%',
        [Theme.breakpoints.down('md')]:{
            display:'none',
        }

    }
}));

const Home = () =>{
const classes = useStyle();
const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

///important dispatch

const {products} = useSelector( state => state.getProducts )

const dispatch = useDispatch();

useEffect(() =>{
    
dispatch(listProducts())
},[dispatch])

    return(
        <div>
            <NavBar /> 
                <Box className={classes.component}>  
                    <Banner />
                    <Box style={{display:'flex'}}>
                        <Box className={classes.leftComponent}>
                            <Slide timer={true} title="Deal of the day" products={products}/>
                        </Box>
                        <Box className={classes.rightWrapper}>
                            <img src={adURL} style={{width: 230}}/>
                        </Box>
                    </Box>
                    <MidSection />
                    <Slide timer={false}
                    title="Discout for you"
                    products={products}
                    />
                    <Slide timer={false}
                    title="Suggested Item"
                    products={products}
                    />
                    <Slide timer={false}
                    title="Top Selection"
                    products={products}
                    />
                    <Slide timer={false}
                    title="Recmonded Item"
                    products={products}
                    />
                    <Slide timer={false}
                    title="Best Seller"
                    products={products}
                    /> 

                 </Box>
                
        </div>
        
    )
};

export default Home;