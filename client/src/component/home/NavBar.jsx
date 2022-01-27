

import { navData } from "../../constant/data";
import {Box,makeStyles,withStyles,Typography} from "@material-ui/core";

//wasif mohammad khan
const NavBar = () =>{

    const useStyle = makeStyles(theme =>({
        container:{
            display : "flex",
            margin: "55px 130px 0 130px",
            justifyContent: 'space-between',
            overflowX: 'overlay',
            [theme.breakpoints.down('md')]:{
                margin: 0 
            }
        },
        component:{
            textAlign: "center",
            padding :"12px 8px",
        },
        image:{
            width: 64 ,
        },
       
    }));

    const TypoGraphy = withStyles({
        root:{
            fontSize: 14,
            fontWeight: 600,
        }

    })(Typography)

    

    const classes = useStyle();
    return(

        
        <Box className = {classes.container}>
            {
            navData.map(data => (
                <Box className={classes.component} >
                         <img src = {data.url} className={classes.image} />
                        <TypoGraphy >{data.text}</TypoGraphy>
                </Box>
            ))
            }      
     </Box>
    )
};

export default NavBar;