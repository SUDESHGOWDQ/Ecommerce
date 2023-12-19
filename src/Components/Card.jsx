import { useState } from 'react'
import './Card.css'
import { Link } from 'react-router-dom';
const Card = ({item,handleClick}) => {
  const[open,setOpen]=useState(false)
    const {title,price,image,description,rating,id}=item
  return (
    <div className="Card">
    <Link to={`/about/${id}`}><img src={image} height={'200px'} width={'200px'}></img></Link>
      <h5>{title}</h5>
      <p><b>Price:</b>{price}</p>
      <p><b>Rating:</b>{rating.rate}⭐</p>
      <button onClick={()=>handleClick(item)}>Add Cart</button>
      <button onClick={()=>setOpen(!open)}>Read More</button>
      {open && (
        <div>
          <p>{description}</p>
          <button onClick={()=>setOpen(!open)}>Close</button>
        </div>
      )}
    </div>
  )
}

export default Card
