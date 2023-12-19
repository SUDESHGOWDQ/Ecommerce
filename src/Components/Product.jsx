import React from 'react'
import Card from "./Card";
import './Product.css'

const Product = ({search,handleClick,data}) => {

  return (
    <div className='Product'>
      
      <header className='pheader' >
     
      </header>


       <section className="sec">
       {data.filter((item)=>item.category.toLocaleLowerCase().includes(search)).map((item)=>{
        return(
          <Card key={item.id} item={item} handleClick={handleClick} />
        )
      })}    
       </section> 
    </div>
  )
}

export default Product
