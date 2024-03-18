import React, { useEffect, useRef, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import Date_picker from './Date_picker';
import './Date_picker.css';
import searchIcon from '../img/search.svg';
import Select from 'react-select';

function Search_tab() {
    const [isVisible, setIsVisible] = useState(false);
    const [locationInput, setLocationInput] = useState('');
    const [isAutoSuggestVisible, setAutoSuggestVisible] = useState(false);
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
    const [activeTab, setActiveTab] = useState(null);
    const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => ({ value: num, label: num }));
    const [beds,setBeds]=useState(1);
    const [cities] = useState([
        "Mumbai, Maharashtra",
    "Delhi, Delhi",
    "Bangalore, Karnataka",
    "Kolkata, West Bengal",
    "Chennai, Tamil Nadu",
    "Hyderabad, Telangana",
    "Ahmedabad, Gujarat",
    "Pune, Maharashtra",
    "Surat, Gujarat",
    "Jaipur, Rajasthan",
    "Lucknow, Uttar Pradesh",
    "Kanpur, Uttar Pradesh",
    "Nagpur, Maharashtra",
    "Visakhapatnam, Andhra Pradesh",
    "Indore, Madhya Pradesh",
    "Thane, Maharashtra",
    "Bhopal, Madhya Pradesh",
    "Patna, Bihar",
    "Vadodara, Gujarat",
    "Ghaziabad, Uttar Pradesh",
    "Ludhiana, Punjab",
    "Agra, Uttar Pradesh",
    "Nashik, Maharashtra",
    "Faridabad, Haryana",
    "Meerut, Uttar Pradesh",
    "Rajkot, Gujarat",
    "Kalyan-Dombivli, Maharashtra",
    "Vasai-Virar, Maharashtra",
    "Varanasi, Uttar Pradesh",
    "Srinagar, Jammu and Kashmir",
    "Aurangabad, Maharashtra",
        // Add more cities as needed
    ]);

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleClickOutside = (event) => {
        if (autoSuggestRef.current && !autoSuggestRef.current.contains(event.target)) {
            setAutoSuggestVisible(false);
        }
    };

    const autoSuggestRef = useRef(null);

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

    const handleLocationInputChange = (event) => {
        setLocationInput(event.target.value);
        setAutoSuggestVisible(true);
    };

    const handleItemClick = (city) => {
        setLocationInput(city);
        setAutoSuggestVisible(false);
    };

    const toggleDropdown = (beds) => {
        setBeds(beds); // Toggle dropdown visibility
    };

    return (
        <div className='search_tab'>
            <div className='location_tab'>
                <p className='where'>Where?</p>
                <input
                    className='loaction_input'
                    placeholder='Search location'
                    value={locationInput}
                    onChange={handleLocationInputChange}
                />
                {isAutoSuggestVisible && (
                    <div className='autocomplete' ref={autoSuggestRef}>
                        {cities
                            .filter((city) =>
                                city.toLowerCase().includes(locationInput.toLowerCase())
                            )
                            .map((city, index) => (
                                <div key={index} 
                                className='autocomplete-item'
                                onClick={() => handleItemClick(city)}
                                >
                                    <span>{city}</span>
                                </div>
                            ))}
                    </div>
                )}
            </div>
            <div className='checkin_tab'>
                <p className='checkin_title' onClick={() => toggleVisibility('checkIn')}>
                    Check in
                </p>
                <p className='add_date'>{checkInDate ? checkInDate.toLocaleDateString() : 'Add date'}</p>
            </div>
            <div className='checkout_tab'>
                <p className='checkin_title' onClick={() => toggleVisibility('checkOut')}>
                    Check out
                </p>
                <p className='add_date'>{checkOutDate ? checkOutDate.toLocaleDateString() : 'Add date'}</p>
            </div>
            <div className='guest_tab'>
                <p className='who'>Beds</p>
                <Select
                    className='guests'
                    value={beds}
                    onChange={toggleDropdown}
                    options={options}
                    placeholder="1"
                    styles={{
                        control: provided => ({
                            ...provided,
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
                            color: 'rgb(141, 140, 140)', // set text color
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
            <div className='search_icon'>
                <img src={searchIcon} className='icon' alt='Search Icon' />
            </div>
            {isVisible && activeTab === 'checkIn' && (
                    <Date_picker 
                    selectedDate={checkInDate} 
                    onDateChange={handleCheckInDateChange} />
            )}

            {isVisible && activeTab === 'checkOut' && (
                    <Date_picker 
                    selectedDate={checkOutDate} 
                    onDateChange={handleCheckOutDateChange}
                    minDate={checkInDate} />
            )}

        </div>
    );
}

export default Search_tab;
