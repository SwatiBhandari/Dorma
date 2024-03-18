import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import rupee from '../img/rupee.svg'
import line from '../img/line.svg'
import star from '../img/star.svg'
import 'react-datepicker/dist/react-datepicker.css';
import Date_picker from './Date_picker';
import './Date_picker.css';
import Select from 'react-select';
import { useSharedState } from './SharedStateContext';
import { loadScript } from './utils';
import { Link } from 'react-router-dom'


function Detail() {
    const [paymentStatus, setPaymentStatus] = useState(null);
    const { state } = useSharedState();
    const { popularItem } = state;
    const [isVisible, setIsVisible] = useState(false);
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
    const [activeTab, setActiveTab] = useState(null);
    const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => ({ value: num, label: num }));
    const [beds,setBeds]=useState(1);
    const [finalAmt, setFinalAmt]=useState(0);
    const { dispatch } = useSharedState();


    // Effect to load popularItem from local storage on component mount
    useEffect(() => {
        const storedPopularItem = JSON.parse(localStorage.getItem('popularItem'));
        if (storedPopularItem) {
            dispatch({ type: 'SET_POPULAR_ITEM', payload: storedPopularItem });
        }
    }, [dispatch]);

    if (!popularItem) {
        return <div>Loading...</div>;
    }

    const { id, image, city, name, price, rating, facilities, rule, cancellation_policy, image_list } = popularItem;


    const handleClick = () => {
        dispatch({ type: 'SET_IMAGE_LIST', payload: image_list});
        // Store popular item in local storage
        localStorage.setItem('image_list', JSON.stringify(image_list));
    };

    const detail_img = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        border: '1px solid #ccc'
    };

    const toggleVisibility = (tab) => {
        setIsVisible(!isVisible);
        setActiveTab(tab);
    };

    // Function to handle check-in date change
    const handleCheckInDateChange = (date) => {
        setCheckInDate(date);
    };

    // Function to handle check-out date change
    const handleCheckOutDateChange = (date) => {
        setCheckOutDate(date);
    };

    const toggleDropdown = (beds) => {
        setBeds(beds); // Toggle dropdown visibility
    };

    const handlePayment = async () => {
        // Load Razorpay script dynamically
        console.log(finalAmt);
        await loadScript('https://checkout.razorpay.com/v1/checkout.js');


        const options = {
            key: 'rzp_test_CEXIhYhHSjNT7O', // Replace with your Razorpay key
            amount: '50000', // Example amount in paisa (50 INR)
            currency: 'INR',
            name: 'Dorma',
            description: 'Payment for Dormitory Booking',
            image: '', // URL to your logo
            handler: function (response) {
                // Handle successful payment
                console.log('Payment successful:', response);
                setPaymentStatus('success');
            },
            prefill: {
                name: 'Customer Name',
                email: 'customer@example.com',
                contact: '9999999999'
            },
            theme: {
                color: '#3399cc'
            }
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
    };

    return (
        <>
            <div className='details'>
                <div className='details__left'>
                        <div style={detail_img} className='details__image__container'>
                            <Link to="/display_images" onClick={handleClick}>
                                <button className='show_button'>View all</button>
                            </Link>
                        </div>
                    <div className='details__details'>
                        <p className='details_city'>{city}</p>
                        <p className='details_name'>{name}</p>
                        <div className='details_price_rating'>
                            <div className='details_price'>
                                <img src={rupee} className='details_rupee'/>
                                <p className='details_price_num'>{price} per bed</p>
                            </div>
                            <img src={line} className='details_line'/>
                            <div className='details_rating'>
                                <img src={star} className='details_star_icon'/>
                                <p className='details_rating_num'>{rating}</p>
                            </div>
                        </div>
                    </div>
                    {facilities && (
                        <div className='facilities'>
                            <p className='facilities_title'>What we offer?</p>
                            <ul className='fancy-list'>
                                {facilities.map((facility, index) => (
                                    <li key={index}>{facility}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <div className='rules'>
                        <p className='rule_title'>Things to know</p>
                        <div className='rule_divs'>
                            {rule && (
                                <div className='rule_left'>
                                    <p className='rule_left_title'>House Rules</p>
                                    {rule.map((rule, index) => (
                                        <p className='rule_list' key={index}>{rule}</p>
                                    ))}
                                </div>
                            )}
                            <div className='rule_right'>
                                <p className='rule_right_title'>Cancellation Policy</p>
                                <p>{cancellation_policy}</p>
                            </div>
                        </div>
                    </div>
                    <div className='Contact_Owner'>
                        <p className='rule_title'>Contact Owner</p>
                        <form className='contact-form'>
                            <textarea rows={10} className='contact-input' type='text' placeholder='Enter your message' />
                            <button className='contact-button' type='submit'>Send</button>
                        </form>
                    </div>
                </div>
                <div className='details__middle'>
                    <div className='reserve__tab'>
                        <p className='reserve__tab__title'>Rs. <span>{price}</span>per bed</p>
                        <div className='dates'>
                            <div className='checkin_date'>
                                <p className='checkin' onClick={() => toggleVisibility('checkIn')}>Check in</p>
                                <p className='add_date__'>{checkInDate ? checkInDate.toLocaleDateString() : 'Add date'}</p>
                            </div>
                            <div className='checkout_date'>
                                <p className='checkin' onClick={() => toggleVisibility('checkOut')}>Check out</p>
                                <p className='add_date__'>{checkOutDate ? checkOutDate.toLocaleDateString() : 'Add date'}</p>
                            </div>
                            <div className='guest'>
                                
                                <p className='who__'>Who</p>
                                <Select
                                    className='no_beds'
                                    value={options.find(option => option.value === beds)}
                                    onChange={(selectedOption) => {
                                        toggleDropdown(); // Toggle dropdown visibility
                                        setBeds(selectedOption.value); // Update beds state
                                        setFinalAmt((price * beds + 70)*100);
                                    }}
                                    options={options}
                                    placeholder="1"
                                    styles={{
                                        control: provided => ({
                                            ...provided,
                                            width:'100%',
                                            border: 'none', // removes default border
                                            boxShadow: 'none',
                                            background: 'transparent',
                                            color: 'rgb(141, 140, 140)', // removes default box shadow
                                            '&:hover': { // styles on hover
                                                borderColor: 'none',
                                            },
                                            marginTop: -4,
                                            fontSize: '14px',
                                            minHeight: '30px',
                                           
                                        }),
                                        input: provided => ({
                                            ...provided,
                                            color: 'rgb(141, 140, 140)', // set text color
                                        }),
                                        option: (provided, state) => ({
                                            ...provided,
                                            color: 'rgb(141, 140, 140)',
                                        }),
                                        indicatorsContainer: provided => ({
                                            ...provided,
                                            display: 'none' // hide indicators container
                                        })
                                    }}
                                    components={{
                                        DropdownIndicator: () => null // hide dropdown indicator
                                    }}
                                    />
                            </div>
                        </div>
                        {isVisible && activeTab === 'checkIn' && (
                            <div className='date__details'>
                                <Date_picker 
                                selectedDate={checkInDate} 
                                onDateChange={handleCheckInDateChange} />
                            </div>
                        )}

                        {isVisible && activeTab === 'checkOut' && (
                            <div className='date__details'>
                                <Date_picker 
                                selectedDate={checkOutDate} 
                                onDateChange={handleCheckOutDateChange}
                                minDate={checkInDate} />  
                            </div>
                        )}
                        <button onClick={handlePayment} className='reserve__button'>
                            Reserve
                        </button>
                        {paymentStatus === 'success' && <p>Payment successful!</p>}
                        <p className='wont_be_charged'>You won't be charged yet</p>
                        <div className='pre_bill_1'>
                            <p>Rs {price}    x    {beds} beds</p>
                            <p>Rs {price * beds}</p>
                        </div>
                        <div className='pre_bill_2'>
                            <p>Dorma service charge</p>
                            <p>70</p>
                        </div>
                        <hr/>
                        <div className='bill'>
                            <p>Total bill</p>
                            <p>Rs {price * beds +70}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Detail;
