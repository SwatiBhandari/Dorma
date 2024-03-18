import React, { useEffect } from 'react';
import dorm from '../img/dorm.jpg';
import './Display_images.css';
import { useSharedState } from './SharedStateContext';

function Display_images() {
    const { state, dispatch } = useSharedState();
    const { imageList } = state;

    useEffect(() => {
        const storedImageList = JSON.parse(localStorage.getItem('image_list'));
        console.log("Stored Image List:", storedImageList); // Debug logging
        if (storedImageList) {
            dispatch({ type: 'SET_IMAGE_LIST', payload: storedImageList });
        }
    }, [dispatch]);


    console.log("Current State:", state); // Debug logging

    if (!imageList) {
        return <div>Loading...</div>;
    }

    return (
        <div className='display_images'>
            {imageList.map((imageUrl, index) => (
                <div key={index} className='actual_image' style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', border: '1px solid #ccc' }}></div>
            ))}
        </div>
    );
}

export default Display_images;
