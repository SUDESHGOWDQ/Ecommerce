import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='Foot'>
         <section className='Footer'>
        <div id="box1"  className='footdiv'>
            <a href="tel:+919876543210"><i class="fa-solid fa-phone">Call</i></a>
            <a href="mailto:sudesh@gmail.com"><i class="fa-solid fa-mail-bulk">Mail</i></a>
            <a href=""> <i class="fa-brands fa-whatsapp">Watsapp</i></a>
        </div>
        <div id="box2" className='footdiv'>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium debitis non iste pariatur sit impedit delectus eos eum nisi doloribus vel laudantium optio, minima consequuntur accusamus animi aliquid voluptate, qui quam esse quis! Maxime, nihil atque neque sunt error labore eveniet illum similique aut reiciendis nobis cumque reprehenderit explicabo consequatur architecto nam facilis totam fugit tenetur, animi fugiat? Incidunt vero obcaecati architecto voluptatibus, doloribus quas eos ipsum labore pariatur quod?</p>
        </div>
        <div id="box3" className='footdiv'>
            <i class="fa-brands fa-whatsapp"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-linkedin"></i>
        </div>
    </section>
    </div>
  )
}

export default Footer