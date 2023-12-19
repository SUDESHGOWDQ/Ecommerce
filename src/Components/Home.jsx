

import { Link } from 'react-router-dom'
import './Home.css'
import Footer from './Footer/Footer'



const Home = () => {




  return (
    <div className='Home' >


    <main className="HomeMain" style={{position:'sticky',top:0}}>
     <header className='header1' style={{width:'100%',background:'rgba(0,0,0,0.5)',height:'100px',display:'flex',display:'flex',justifyContent:'space-around',alignItems:'center'}}>
     <nav className='nav1' style={{background:'transparent',display:'flex',justifyContent:'space-around',alignItems:'center',width:'60%',margin:'auto',flexWrap:'wrap'}}> 
       <Link to='/' style={{textDecoration:'none',color:'white'}}>Home</Link>
       <Link to='/product' style={{textDecoration:'none',color:'white'}}>Products</Link>
       <Link to='/cart' style={{textDecoration:'none',color:'white'}}>Cart</Link>
       </nav>


       
     </header>
      <h1 style={{fontFamily:"fantasy",textShadow:'20px 20px 20px black',fontSize:'100px',color:'white',paddingTop:'120px'}}>Deal is Here</h1>
      <Link to={'/product'}><button style={{background:'rgba(0,0,0,0.9)',color:'white'}}>Shop More</button></Link>
    </main>



    <section className="Homesec">
      <img alt=""  width={'100%'} src="https://images01.nicepagecdn.com/page/47/81/website-template-preview-47818.webp"></img>
    </section>

    <aside className="asidecar">
      <img alt="image1"  src="https://www.bustedtees.com/cdn/shop/files/11_3_1512x.jpg?v=1614699072"></img>
      <img alt="image1"  src="https://www.bustedtees.com/cdn/shop/files/5_10_1512x.jpg?v=1614698543"></img>
      <img  alt="image1" src="https://www.bustedtees.com/cdn/shop/files/Sci-Fi_1512x.jpg?v=1625586190"></img>
      <img alt="image1"  src="	https://www.bustedtees.com/cdn/shop/files/BTHats_540x.jpg?v=1616758164"></img>
    </aside>


    <Footer/>




    </div>
  )
}

export default Home
