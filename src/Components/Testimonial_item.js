import React from 'react'
import double_1 from '../img/double_1.svg'
import double_2 from '../img/double_2.svg'
import profile from '../img/profile.jpg'


function Testimonial_item({key,cust_name,cust_review,cust_pic}) {

    const pro={
        backgroundImage: `url(${cust_pic})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        border: '1px solid #ccc'
    }

  return (
    <>
    <div className='testimonial_item'>
        <img className='double_1' src={double_1}/>
        <p className='review'>{cust_review}</p>
        <img className='double_2' src={double_2}/>
    </div>
    <div className='pic_name'>
        <div style={pro} className='pic'></div>
        <div className='name'>{cust_name}</div>
    </div>
    </>
    
  )
}

export default Testimonial_item
