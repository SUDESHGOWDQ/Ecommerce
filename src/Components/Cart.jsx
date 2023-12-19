import { useEffect, useState } from 'react'
import './Cart.css'
import { Link } from 'react-router-dom'


const Cart = ({cart,setCart}) => {

  const[price,setPrice]=useState(0)

  function handlePrice(){
    let ans=0
    cart.map((item)=>ans+=item.price*item.amount)
    setPrice(ans)
  }

  useEffect(()=>{
    handlePrice()
  })


  
  function handleAdd(id){
    const newData=cart.map((item)=>{
      if(item.id==id){
        return {...item,amount:item.amount+1};
      }
      return item;
    })

    setCart(newData);
  }

  
  function handleSub(id){
    const newData=cart.map((item)=>{
      if(item.id==id){
        return {...item,amount:item.amount-1};
      }
      return item;
    })
    setCart(newData)
  }



  function handleRemove(id){
    const del = cart.filter(i=>id!==i.id)
    setCart(del)
  }

  async function checkout(e) {
    e.preventDefault();
    console.log("work");
    try{
      const res = await fetch("http://localhost:8000/checkout",{
        method: "POST",
        headers : {
          "Content-Type": "application/json",
        },
        mode: "cors",
        body:JSON.stringify({
            item: [
              {
                id:'1',
                quantity: 1,
                price:1000,
                name:'Laptop'
              }
            ]
        })
      })
      const data = await res.json();
      window.location = data.url;
    } catch(err) {
      console.log(err);
    }

  }



  return (
    <div className='cart'>
      <table>
        <thead>
          <tr>
            <td><b>Image</b></td>
            <td><b>Name</b></td>
            <td><b>Incre</b></td>
            <td><b>Qty</b></td>
            <td><b>Decr</b></td>
            <td><b>TotalPrice</b></td>
            <td><b>Remove</b></td>
          </tr>
        </thead>
        <tbody>
          {cart.map((item)=>{
            return(
              <tr key={item.id}>
                <td><Link to={`/about/${item.id}`}><img src={item.image} height={'50px'} width={'50px'}></img></Link></td>
                <td><b>{item.title}</b></td>
                <td><button onClick={()=>handleAdd(item.id)}>+</button></td>
                <td>{item.amount>=1?item.amount:0}</td>
                <td><button onClick={()=>handleSub(item.id)}>-</button></td>
                <td>{item.price*item.amount>0?item.price*item.amount:0}</td>
                <td><button onClick={()=>handleRemove(item.id)}>Delete</button></td>
              </tr>
            )
          })}
        </tbody>
        <tfoot>
          <tr>
            <td>Total Amount</td>
            <td colSpan={5}>{price>0?price:0}Rs</td>
            <td><button onClick={checkout}>PayHere</button></td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default Cart
