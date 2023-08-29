import logo from './logo.svg';
import './App.css';
import ProdDisplay from './other/ProdDisplay';
import { Route, Routes } from "react-router-dom";
import CartItem from './other/CartItem';

function App() {
  return (
    <div className="App">

    <Routes>
<Route path="/" element = {<ProdDisplay/>}></Route>
<Route path="/cartitem" element = {<CartItem/>}></Route>

</Routes>
      
    </div>
  );
}

export default App;
