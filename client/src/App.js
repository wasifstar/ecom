

import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Header from "./component/header/Header";
import Home from "./component/home/Home";
import Cart from './component/cart/Cart';
import DetailView from './component/product/DetailView';

import { TamplateProvider } from './tamplate/TamplateProvider';
import ContextProvider from './context/ContextProvider';
import {Box} from '@material-ui/core';
//wasif mohammad khan

function App() {
  return (
    <TamplateProvider>
      <ContextProvider>
    <BrowserRouter>
    <Header/>
    <Box style={{marginTop: 54}}>
    <Routes>
      
      <Route exact path = "/" element={<Home/>}/>
      <Route exact path = "/cart" element={<Cart/>} />
      <Route exact path = "/product/:id" element={<DetailView/>}/>
    </Routes>
    </Box>
      </BrowserRouter>
      </ContextProvider>
      </TamplateProvider>
  );
}

export default App; 
