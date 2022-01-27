
import Carousel from 'react-material-ui-carousel';
import { bannerData } from '../../constant/data';
import { makeStyles } from '@material-ui/core';

//wasif mohammad khan

const useStyle = makeStyles(theme => ({
    image:{
        width: '100%',
        height: 280,
        [theme.breakpoints.down('sm')]:{
            objectFit:'cover',
            height: 180,
        }
    },
    carousel:{
        marginTop : 10,
    }
}));
const Banner = () =>
{
  
    const classes =  useStyle();
    return(
         <Carousel 
         autoPlay={true}
         animation='slide'
         indicators={false}
         cycleNavigation={true}
         navButtonsProps = {{
             style:{
                 background: '#ffffff', 
                 color: '#49494949',
                 borderRadius: 0,
                 
             }
         }}
         className = {classes.carousel}
         > 
            
            {
                bannerData.map(Image => ( <img src={Image} className={classes.image}/>))
            }
        </Carousel>
    )
}
export default Banner;