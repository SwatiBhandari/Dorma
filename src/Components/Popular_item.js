import React from 'react'
import dorm from '../img/dorm.jpg'
import star from '../img/star.svg'
import rupee from '../img/rupee.svg'
import line from '../img/line.svg'
import { Link } from 'react-router-dom'
import { useSharedState } from './SharedStateContext';

function Popular_item({id, image, city, name, price, rating ,facilities, rule, cancellation_policy, image_list}) {

  const { dispatch } = useSharedState();

  const handleClick = () => {
    dispatch({ type: 'SET_POPULAR_ITEM', payload: { id, image, city, name, price, rating, facilities, rule, cancellation_policy, image_list } });
    // Store popular item in local storage
    localStorage.setItem('popularItem', JSON.stringify({ id, image, city, name, price, rating, facilities, rule, cancellation_policy, image_list }));
  };

  const img={
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '250px',
      border: '1px solid #ccc'
  }

  return (
    <div className='popular_item'>
      <Link to="/detail" onClick={handleClick} className='popular_link'>
        <div style={img} className='popular_item_image'>
        </div>
        <p className='popular_item_city'>{city}</p>
        <p className='popular_item_name'>{name}</p>
        <div className='popular_item_price_rating'>
          <div className='popular_item_price'>
            <img src={rupee} className='rupee'/>
            <p className='popular_item_price_num'>{price} per bed</p>
          </div>
          <img src={line} className='line'/>
          <div className='popular_item_rating'>
            <img src={star} className='star_icon'/>
            <p className='popular_item_rating_num'>{rating}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Popular_item
