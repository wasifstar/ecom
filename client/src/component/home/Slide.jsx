import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

//import { products } from "../../constant/data";

import { makeStyles,Box,Button,Typography,Divider,} from "@material-ui/core";

import Countdown from "react-countdown";
import react from "react";
import { Link } from "react-router-dom";
//wasif mohammad khan
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const useStyle = makeStyles(Theme => ({
  img: {
    height: 150,
  },

  component: {
    marginTop: 12,
    background: "#ffffff",
  },
  deal: {
    padding: "15px 20px",
    display: "flex",
  },
  timer: {
    color: "#7f7f7f7f",
    marginLeft: 10,
    alignItems: "center",
    display: "flex",
  },
  button: {
    marginLeft: "auto",
    background: "#2874f0",
    borderRadius: 2,
    fontSize: 13,
    textAlign: "center",
  },
  dealText: {
    fontSize: 22,
    fontWeight: 600,
    lineHeight: "32px",
    marginRight: 25,
  },
  wrapper: {
    padding: "25px 15px",
  },
  text: {
    fontSize: 14,
    marginTop: 5,
  },
  timer:{
    [Theme.breakpoints.down('sm')]:{
      display:'none',
    }
  },
}));

const Slide = ({ timer, title, products }) => {
  const classes = useStyle();
  const timerURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";

  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <span className={classes.timer}>
        {hours} : {minutes} : {seconds} Left
      </span>
    );
  };

  return (
    <Box className={classes.component}>
      <Box className={classes.deal}>
        <Typography className={classes.dealText}>{title}</Typography>
        {timer && 
          <Box className={classes.timer}>
            <img src={timerURL} style={{ width: 24 }} />
            <Countdown date={Date.now() + 5.04e7} renderer={renderer} />,
          </Box> 
        }
        <Button variant="contained" color="primary" className={classes.button}>view all</Button>
        
      </Box>
      <Divider />

      <Carousel
        responsive={responsive}
        infinite={true}
        draggable={false}
        swipeable={false}
        centerMode={true}
        autoPlay={true}
        autoPlaySpeed={10000}
        keyBoardControl={true}
        showDots={false}
       // removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        {products.map((product) => (
          <Link to={`product/${product.id}`}>
            <Box textAlign="center" className={classes.wrapper}>
              <img src={product.url} className={classes.img} />

              <Typography className={classes.text} style={{ fontWeight: 600 }}>
                {product.title.shortTitle}
              </Typography>
              <Typography className={classes.text} style={{ fontWeight: 600, color: "green" }}>
                {product.discount}
              </Typography>
              <Typography
                className={classes.text} style={{ color: "#212121", opacity: ".6" }}>
                {product.tagline}
              </Typography>
            </Box>
          </Link>
        ))}
      </Carousel>
    </Box>
  );
};
export default Slide;
