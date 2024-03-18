import React from 'react'
import Testimonial_item from './Testimonial_item'
import '../Components/Testimonial_item.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Testimonial() {

  const rev=[
    {
      id:1,
      cust_name:"David Smith",
      cust_review:"Dorma is fantastic! The rooms are cozy, the atmosphere is vibrant, and the staff is super supportive. Highly recommended!",
      cust_pic:"https://media.istockphoto.com/id/640313074/photo/nowhere-to-go-no-one-to-see.jpg?s=612x612&w=0&k=20&c=7_Xf-YgYs0tJpedFJp0yOsrcvInsxzlX3egF3riHR6c=",
    },
    {
      id:2,
      cust_name:"Emily Brown",
      cust_review:"Dorma exceeded my expectations! It's not just a place to stay; it's a community where I've made lifelong friends and unforgettable memories",
      cust_pic:"https://media.istockphoto.com/id/1355091290/photo/young-woman-with-coffee-cup-smiling-outdoors.jpg?s=612x612&w=0&k=20&c=7bYDhW7ZM0xpRS0nt3qhcvR1aZ63HK-ZRlZ6fObEpxI=",
    },
    {
      id:3,
      cust_name:"Christopher Davis",
      cust_review:"Dorma is simply amazing! From the cozy rooms to the vibrant atmosphere, it feels like a home away from home. Highly recommended!",
      cust_pic:"https://storage.googleapis.com/pai-images/469423cf957e468d85c64d766c8d19a0.jpeg",
    },
    {
      id:4,
      cust_name:"Samantha Taylor",
      cust_review:"Dorma exceeded all my expectations! The comfortable beds, friendly staff, and convenient location made my stay unforgettable. Will definitely be coming back!",
      cust_pic:"https://www.shutterstock.com/image-photo/close-portrait-smiling-excited-girl-600nw-704876725.jpg",
    },
    {
      id:5,
      cust_name:"Daniel Garcia",
      cust_review:"Staying at Dorma was a game-changer for me. The cozy atmosphere, vibrant community, and top-notch facilities made it feel like a home away from home. Can't recommend it enough!",
      cust_pic:"https://img.freepik.com/free-photo/handsome-black-man-is-engaged-gym_1157-32162.jpg",
    },
  ]

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    arrows: false,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2500, // Set autoplay speed to 2 seconds (2000 milliseconds)
    style: {
      width: '900px',
      margin: '0 auto',
    }
  };

  return (
    <div className='Testimonial'>
      <p className='Testimonial_title'>What our customers say</p>
      <div className='slide'>
        <Slider {...settings}>
          {rev.map(customer => (
            <Testimonial_item 
            key={customer.id} 
            {...customer} 
            />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Testimonial
