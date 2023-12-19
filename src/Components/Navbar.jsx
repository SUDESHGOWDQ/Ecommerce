import { Link } from "react-router-dom"
import './Navbar.css'
import Data from '../Data'


const Navbar = ({setSearch,size,data,setData,handleSort}) => {

  
  const filterResult = (catItem)=>{
    var newData=Data;
    const result = newData.filter((curData)=>{
        return curData.category===catItem
    })
    console.log(result);
    setData(result)
}


function filterResult2 (catItem){
  var newData=Data;
  const result = newData.filter((curData)=>{
      return curData.category===catItem
  })
  setData(result)
}


const filterResult3 = (catItem)=>{
  var newData=Data;
  const result = newData.filter((curData)=>{
      return curData.category===catItem
  })
  console.log(result);
  setData(result)
}


const filterResult4 = (catItem)=>{
  var newData=Data;
  const result = newData.filter((curData)=>{
      return curData.category===catItem
  })
  console.log(result);
    setData(result)
}
  return (
    <div className="Nav">
    <nav className="navbar">
        <article className="navart">
            <div className="navdiv"><Link style={{color:'white',textDecoration:'none'}} to='/'><img alt="" src={'https://logos-world.net/wp-content/uploads/2020/04/Amazon-Emblem.jpg'} height={'80px'}></img></Link></div>
            <div className="navdiv"><input onChange={(e)=>setSearch(e.target.value)} type="search" placeholder="Search Your Products"></input></div>
            <div className="navdiv"><Link style={{color:'white',textDecoration:'none'}} to='/cart'><img src="https://www.shutterstock.com/shutterstock/videos/19584025/thumb/1.jpg?ip=x480" height={'100px'} alt=""></img><sup>{size}</sup></Link></div>
            <article id="Artbtn">
   <button onClick={()=>filterResult(`men's clothing`)}>Men</button>
   <button onClick={()=>filterResult2(`women's clothing`)}>Women</button>
   <button onClick={()=>filterResult3(`electronics`)}>Electronics</button>
   <button onClick={()=>filterResult4(`jewelery`)}>Jewellery</button>
   <button onClick={handleSort}>Sort By Price</button>
    </article>
        </article>
    </nav>

    </div>
  )
}

export default Navbar
