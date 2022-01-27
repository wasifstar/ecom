
import {AppBar, Toolbar, makeStyles, Typography,Box,withStyles,IconButton,Drawer,List,Listitem} from '@material-ui/core';

import SearchAppBar from './SearchB';

import ButtonAppBar from './HeaderButtons.jsx';

import {Link} from 'react-router-dom';

import {Menu} from '@material-ui/icons'
import { useState } from 'react';
//wasif mohammad khan

const useStyle =makeStyles(theme => ({
    header: {
        backgroundColor: '#2874f0',
        height:55
    },
    logo: {
      width: 75
    },
    subURL: {
        width: 10,
        marginLeft: 4,
        height: 10,
    },
    container: {
        display : 'flex ',
    },
    component: {
          marginLeft: 123,
          lineHeight: 0,  
          color:'#fff',
          textDecoration:'none',
    },
    subHeading: {
        fontSize: 10,
        fontStyle: 'italic',
    },
    list:{
        width: 250,
    },
    menuButton:{
        display:'none',
        [theme.breakpoints.down('sm')]:{
            display:'block',
        }
    },
    buttonAppBar:{
        margin: '0 7% 0 auto',
        [theme.breakpoints.down('sm')]:{
            display:'none',
        }
    }
}));

const ToolBar = withStyles({
    root:{
        minHeight: 55
    }
})(Toolbar);

const Header = () =>
{
    const classes = useStyle();
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
 
const [open,setOpen] = useState(false);
const handleClose = () =>{
    setOpen(false);
}
const handleOpen = () =>{
    setOpen(true);
}
const list = () => (                                     
     <Box className={classes.list}onClick={handleClose} >
        <List>
            <listitem buttom>
                <ButtonAppBar />
            </listitem>
        </List>
    </Box>
    );

     
    return(
        <AppBar className ={classes.header}>
            <ToolBar>
                <IconButton color='inherit' className={classes.menuButton} onClick={handleOpen}>
                    <Menu />  
                </IconButton>
                <Drawer open={open} onClose={handleClose}>
                    {list()}
                </Drawer>
                <Link to='/' className ={classes.component}>
                <Box>
                <img src = {logoURL} className ={classes.logo} />
                </Box>
                <Box className ={classes.container}>
                <Typography className={classes.subHeading}>Explore <Box component ="span" style={{color:"yellow"}}>Plus
                </Box></Typography>
                <Box>
                <img src = {subURL} className = {classes.subURL}/>
                </Box>
                </Box>
                </Link>
                
                <SearchAppBar />
                
                <span className={classes.buttonAppBar}> <ButtonAppBar /></span>
            </ToolBar>
            
        </AppBar>
    
        
    )
};
export default Header;