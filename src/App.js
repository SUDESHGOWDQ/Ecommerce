import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Components/Home'
import Cart from './Components/Cart';
import Navbar from './Components/Navbar';
import About from './Components/About'
import Data from './Data'
import './App.css'
import { useState } from 'react';
import Product from './Components/Product';

const App = () => {
  const[data,setData]=useState(Data)
  const[search,setSearch]=useState("")
  const [cart,setCart]=useState([])
  const [sortOrder, setSortOrder] = useState('asc');
    

  const handleSort = () => {
    const newOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newOrder);
    const sorted = [...data].sort((a, b) => {
      return newOrder === 'asc' ? a.price - b.price : b.price - a.price;
    });
    setData(sorted);
  };


  function handleClick(item){
    setCart([...cart,item])
  }



  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cart' element={
              <>
              <Navbar handleSort={handleSort}  data={data} setData={setData}  setSearch={setSearch} size={cart.length} />
              <Cart cart={cart} setCart={setCart}/>
              </>
              }/>
            <Route path='/product' element={
              <>
            <Navbar handleSort={handleSort}  data={data} setData={setData}  setSearch={setSearch} size={cart.length}/>
            <Product data={data}  search={search} handleClick={handleClick}/>
            </>
            }/>
            <Route path='/about/:aboutId' element={
              <>
            <Navbar handleSort={handleSort}  data={data} setData={setData}  setSearch={setSearch} size={cart.length} />  
            <About Data={Data} handleClick={handleClick} />
            </>
            }/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
