import React, { useState } from 'react';
import Popular_item from './Popular_item';
import './Popular_item.css';

function Popular_carousal() {
  const [showAll, setShowAll] = useState(false);

  const items = [
    {
      id:1,
      image:'https://i.pinimg.com/originals/dc/0d/59/dc0d597d654236c055c531638fb6fdd8.jpg',
      city:'Hyderabad, Telangana',
      name:'Bunk Buddies',
      price:400,
      rating:5,
      facilities:[ "Free WiFi",
      "Cleaning",
      "Free Parking",
      "Charging points",
      "Terrace Garden",
      "Paid Meals"],
      rule : [
        'No drinking',
        'No Smoking',
        "Penalty on Damage to property",
        "In time before 10pm"],
      cancellation_policy:"Free cancellation up to 24 hours before check-in time",
      image_list:["https://i.pinimg.com/originals/dc/0d/59/dc0d597d654236c055c531638fb6fdd8.jpg",
      "https://i.pinimg.com/originals/a5/94/1c/a5941ca808ecb0bea1b495d5fec958c7.jpg",
    "https://images.livspace-cdn.com/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/ond-2023-1696420252-fyaIE/renders-1696505505-hTG0j/balcony-1701084744-Ngfrd/001-1702884377-KECDg.jpg"]
    },
    {
      id:2,
      image:'https://www.collegemagazine.com/wp-content/uploads/2019/06/1200px-Escalante_Dorm_Room.jpg',
      city:'Ahmedabad, Gujarat',
      name:'ZenZone Living',
      price:450,
      rating:4.8,
      facilities:[ "Free WiFi",
      "Cleaning",
      "Terrace Garden",
      "Paid Meals"],
      rule : [
        'No drinking',
        'No Smoking',
        "Penalty on Damage to property"],
      cancellation_policy:"Partial refund if cancelled within 48 hours of arrival",
      image_list:["https://www.collegemagazine.com/wp-content/uploads/2019/06/1200px-Escalante_Dorm_Room.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2023/3/296323474/VR/AA/ZG/52844401/new-product-500x500.jpg",
    "https://goodhomes.wwmindia.com/content/2023/apr/balcony-miles-peacock1682755056.jpg"]
    },
    {
      id:3,
      image:'https://rispune.com/wp-content/uploads/2020/12/ris6.png',
      city:'Jaipur, Rajasthan',
      name:'Serendipity Suites',
      price:600,
      rating:3.7,
      facilities:[ "Free WiFi",
      "Cleaning",
      "Free Parking",
      "Charging points"],
      rule : [
        'No drinking',
        'No Smoking',
        "In time before 10pm"],
      cancellation_policy:"Cancellation fee applies if cancelled within 72 hours of arrival",
      image_list:["https://rispune.com/wp-content/uploads/2020/12/ris6.png",
      "https://media.designcafe.com/wp-content/uploads/2020/07/11122902/bathroom-design-with-yellow-patterned-tiles.jpg",
    "https://images.homify.com/v1560227768/p/photo/image/3086448/HU1A0454.jpg"]
    },
    {
      id:4,
      image:'https://r1imghtlak.mmtcdn.com/acda7e081fba11ee95970a58a9feac02.jpg',
      city:'Banglore, Karnataka',
      name:'Comfort Cove Dorms',
      price:300,
      rating:4,
      facilities:[
      "Cleaning",
      "Charging points",
      "Paid Meals"],
      rule : [
        'No drinking',
        'No Smoking'],
        cancellation_policy:"Cancellation fee equal to one night's stay for late cancellations.",
        image_list:["https://r1imghtlak.mmtcdn.com/acda7e081fba11ee95970a58a9feac02.jpg",
        "https://images.livspace-cdn.com/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/ond-2023-1696420252-fyaIE/renders-1696505505-hTG0j/bathroom-1699339619-RnXbz/032-1702878351-M5ePd.jpg",
      "https://thesmalllibrary.co.uk/wp-content/uploads/2021/04/1-small_library_meg.jpg"]
    },
    {
      id:5,
      image:'https://static.wixstatic.com/media/6c68a5_fc1d1db96f08482699305f575bbf971c~mv2.jpg/v1/crop/x_189,y_3,w_979,h_779/fill/w_632,h_504,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/10-bed-dorm.jpg',
      city:'Mumbai, Maharashtra',
      name:'Happy Haven Hostel',
      price:450,
      rating:3.4,
      facilities:[ "Free WiFi",
      "Cleaning",
      "Free Parking",
      "Paid Meals"],
      rule : [
        'No Smoking',
        "Penalty on Damage to property",
        "In time before 10pm"],
        cancellation_policy:"Cancellation fee applies if cancelled within 72 hours of arrival",
        image_list:["https://static.wixstatic.com/media/6c68a5_fc1d1db96f08482699305f575bbf971c~mv2.jpg/v1/crop/x_189,y_3,w_979,h_779/fill/w_632,h_504,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/10-bed-dorm.jpg",
        "https://www.jaquar.com/images/uploaded/Small%20Bathroom%20Ideas%20on%20a%20Budget/Small%20bathroom%20Ideas-%20Final/Chapter-Banner-Feb-2023-Try-New-Tiles.webp",
      "https://media-cdn.tripadvisor.com/media/photo-s/07/a3/1f/06/ymca-indian-student-hostel.jpg"]
    },
    {
      id:6,
      image:'https://s.yimg.com/ny/api/res/1.2/idz6DXtkF7fBpzIGUKwgCA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQ4MA--/https://media.zenfs.com/en/insider_articles_922/a6941c73cddc7579066948e4b870c655',
      city:'Indore, Madhya Pradesh',
      name:'Cozy Cabin Quarters',
      price:550,
      rating:4.6,
      facilities:[ 
      "Charging points",
      "Terrace Garden",
      "Paid Meals"],
      rule : [
        'No drinking',
        "In time before 10pm"],
        cancellation_policy:"Cancellation fee equal to one night's stay for late cancellations.",
        image_list:["https://s.yimg.com/ny/api/res/1.2/idz6DXtkF7fBpzIGUKwgCA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQ4MA--/https://media.zenfs.com/en/insider_articles_922/a6941c73cddc7579066948e4b870c655",
        "https://i.pinimg.com/736x/ca/b8/05/cab8053d543c54440ef38d9ae2a84457.jpg",
      "https://www.pnbhs.school.nz/wp-content/uploads/2015/07/Study-Area-2.jpg"]
    },
    {
      id:7,
      image:'https://img.freepik.com/premium-photo/modern-luxury-hostel-dorm-dormitory-motel-room-wooden-floor-room-full-comfortable-beds_662214-346807.jpg',
      city:'Kolkata, West Bengal',
      name:'Chill Haven Hostel',
      price:600,
      rating:4.9,
      facilities:[ "Free WiFi",
      "Cleaning",
      "Terrace Garden",
      "Paid Meals"],
      rule : [
        'No drinking',
        'No Smoking',
        "Penalty on Damage to property",
        "In time before 10pm"],
        cancellation_policy:"Cancellation fee equal to one night's stay for late cancellations.",
        image_list:["https://img.freepik.com/premium-photo/modern-luxury-hostel-dorm-dormitory-motel-room-wooden-floor-room-full-comfortable-beds_662214-346807.jpg",
        "https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/202302/afforable-bathroom-decoration-ideas/modern-low-budget-bathroom-design.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/07/b3/58/ae/antwerp-student-hostel.jpg"]
    },
    {
      id:8,
      image:'https://media.architecturaldigest.com/photos/64ef80e87994cb5785ce872d/16:9/w_2945,h_1656,c_limit/Dormify_Mood_Lighting.jpg',
      city:'Chennai, Tamil Nadu',
      name:'Urban Retreat Residences',
      price:570,
      rating:4.6,
      facilities:[ "Free WiFi",
      "Cleaning",
      "Paid Meals"],
      rule : [
        "Penalty on Damage to property",
        "In time before 10pm"],
        cancellation_policy:"Cancellation fee equal to one night's stay for late cancellations.",
        image_list:["https://media.architecturaldigest.com/photos/64ef80e87994cb5785ce872d/16:9/w_2945,h_1656,c_limit/Dormify_Mood_Lighting.jpg",
        "https://i.pinimg.com/736x/df/b1/17/dfb1173e20fab2bcdd5e88ad0f7d74c5.jpg",
      "https://www.basecampstudent.com/wp-content/uploads/2023/07/Study-Space-BASECAMP-Student-Accommodation-Wroclaw-copy.jpg"]
    },
    {
      id:9,
      image:'https://cf.bstatic.com/xdata/images/hotel/max1024x768/374324942.jpg?k=1030b4463c82774332ccff42507f02c4857357ead63e5031cf01c2a4ef06ae93&o=&hp=1',
      city:'Noida, Uttar Pradesh',
      name:'MetroLoft Living',
      price:700,
      rating:3.6,
      facilities:[ "Free WiFi",
      "Cleaning",
      "Free Parking",
      "Charging points",
      "Terrace Garden",
      "Paid Meals"],
      rule : [
        'No drinking',
        "Penalty on Damage to property",
        "In time before 10pm"],
        cancellation_policy:"Cancellation fee applies if cancelled within 72 hours of arrival",
        image_list:["https://cf.bstatic.com/xdata/images/hotel/max1024x768/374324942.jpg?k=1030b4463c82774332ccff42507f02c4857357ead63e5031cf01c2a4ef06ae93&o=&hp=1",
        "https://inspireddesigntalk.com/wp-content/uploads/2021/02/airbnb-makover-ideas-768x1024.jpg",
      "https://bpm.uw.edu.pl/wp-content/uploads/sites/69/2023/11/IMGP6506.jpg"]
    },
  ];

  const renderItems = (itemsToRender) => {
    return itemsToRender.map(item => (
      <div key={item.id} className="popular-item">
        <Popular_item {...item} />
      </div>
    ));
  };

  return (
    <div className='popular_carousal'>
      <p className='popular_title'>Our most popular dorms</p>
      <div className='popular_text_button'>
        <p className='popular_text'>Explore our top-rated dorms, preferred by students for their comfort and convenience</p>
        <button className="popular_button" onClick={() => setShowAll(!showAll)}>
          {showAll ? 'Show Less' : 'View All'}
        </button>
      </div>
      <div className="popular-items">
        <div className="popular-items-row">
          {renderItems(showAll ? items : items.slice(0, 4))}
        </div>
      </div>
    </div>
  );
}

export default Popular_carousal;
