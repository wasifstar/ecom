
import SearchIcon from '@mui/icons-material/Search';

import { useSelector,useDispatch } from "react-redux";
import { useEffect,useState } from "react";
import { getProducts as listProducts } from "../../redux/actions/productsAction";

import { makeStyles,List,ListItem, InputBase } from '@material-ui/core';
import { Link } from 'react-router-dom'; 



//wasif mohammad khan

// const Search = styled('div')(({ theme }) => ({
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     '&:hover': {
//       backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },
//     marginRight: theme.spacing(2),
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       marginLeft: theme.spacing(3),
//       width: 'auto',
//     },
//   }));
  
//   const SearchIconWrapper = styled('div')(({ theme }) => ({
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }));
  
//   const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: 'inherit',
//     '& .MuiInputBase-input': {
//       padding: theme.spacing(1, 1, 1, 0),
//       // vertical padding + font size from searchIcon
//       paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//       transition: theme.transitions.create('width'),
//       width: '100%',
//       [theme.breakpoints.up('md')]: {
//         width: '20ch',
//       },
//     },
//   }));

  const useStyle = makeStyles(theme =>({
    search:{
      borderRadius: 2,
      margin: 10,
      width: '38%',
      backgroundColor:'#fff',
      display:'flex',

    },
    searchIcon:{
      marginLeft:'auto',
      padding: 5,
      display:'flex',
      color:'blue',

    },
    inputRoot:{
      fontSize:'unset',
      width:'100%',
    },
    inputInput:{
      paddingLeft: 20,
      width:'100%',
    },
    list:{
      position:'absolute',
      color:'#000',
      background:'#ffffff',
      marginTop: 36,
    }
  }));
    

export default function SearchAppBar() {

  const classes = useStyle();
  const[text,setText] = useState();
  const[open,setOpen] = useState(true);
  
  const getText =(text) =>{
    setText(text);
    setOpen(false);
    console.log(text);
  }

  const getProducts = useSelector(state => state.getProducts)
  const {products} = getProducts;
  const dispatch = useDispatch();
  
  useEffect(() =>{
      
  dispatch(listProducts())
  },[dispatch])

  return (
   

        <div className={classes.search}>
          <InputBase placeholder='Search for product,brand and more'
          classes = {{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{'aria-label':'search'}}
          onChange={(e) =>getText(e.target.value)}
          /> 
          <div className={classes.searchIcon}>
          <SearchIcon/>
          </div>
         
         {text && 
         <List className={classes.list} hidden={open}>
           {products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product =>(

            <ListItem>
            <Link to={`/product/${product.id}`} style={{textDecoration:'none',color:'inherit'}} 
            onClick={() => setOpen(true)}
            >
           {product.title.longTitle}
           </Link>
           </ListItem>  
           ))

           }
         
         </List>} 
        </div>
          // <Search>
          //   <SearchIconWrapper>
          //     <SearchIcon />
          //   </SearchIconWrapper>
          //   <StyledInputBase
          //     placeholder="Search…"
          //     inputProps={{ 'aria-label': 'search' }}
          //   />
          // </Search>
        
  );
}
