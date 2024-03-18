import {React, useState, useEffect} from 'react'
import './Host.css'
import { collection,query,addDoc } from 'firebase/firestore';
import { db,storage } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { hasFormSubmit } from '@testing-library/user-event/dist/utils';


function Host() {

  const [ownerName, setOwnerName] = useState('');
  const [dormName, setDormName] = useState('');
  const [dormCity, setDormCity] = useState('');
  const [dormCompleteAddress, setDormCompleteAddress] = useState([]);
  const [numberOfBeds, setNumberOfBeds] = useState();
  const [amenities, setAmenities] = useState([]);
  const [dormPincode, setDormPincode] = useState();
  const [pricePerBed, setPricePerBed] = useState();
  const [cancellationPolicy, setCancellationPolicy] = useState('');
  const [rules, setRules] = useState([]);
  const [newRule, setNewRule] = useState('');
  const [ownerEmail, setOwnerEmail] = useState('');
  const [imageUrls, setImageUrls] = useState([]);
  const [imageFiles, setImageFiles] = useState([]);


  const [user, setUser] = useState(null);

  const handleFileChange = (e) => {
    const selectedFiles = e.target.files;
    console.log(selectedFiles);
    setImageFiles([...selectedFiles]);
  };

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // User is signed in
        setUser(currentUser);
        setOwnerEmail(currentUser.email);
      } else {
        // No user is signed in
        setUser(null);
      }
    });

    // Clean up the subscription
    return () => unsubscribe();
  }, []);


  const handleAmenityChange = (e) => {
    const { value } = e.target;
    if (amenities.includes(value)) {
      setAmenities(amenities.filter(item => item !== value));
    } else {
      setAmenities([...amenities, value]);
    }
  };

  const addRule = () => {
    if (newRule.trim() !== '') {
      setRules([...rules, newRule]);
      setNewRule('');
    }
  };

  const removeRule = (index) => {
    const updatedRules = [...rules];
    updatedRules.splice(index, 1);
    setRules(updatedRules);
  };

  const uploadImages = async () => {
    try {
      const uploadedImageUrls = [];
      await Promise.all(imageFiles.map(async (file) => {
        const storageRef = ref(storage, `dorm_images/${file.name}`);
        const uploadTaskSnapshot = await uploadBytesResumable(storageRef, file);
        const imageUrl = await getDownloadURL(uploadTaskSnapshot.ref);
        uploadedImageUrls.push(imageUrl);
      }));
      return uploadedImageUrls;
    } catch (error) {
      console.error('Error uploading images:', error);
      throw error;
    }
  };

  const handleSubmit =() => {
    alert("Submit");
  }
  
  

  return (
    <div className="form-container">
    <h1>Ready To Host Your Dorm?</h1>
      <form onSubmit={handleSubmit} className="dorm-form">
        <div className="form-group">
          <input placeholder='Owner Name' type="text" value={ownerName} onChange={(e) => setOwnerName(e.target.value)} />
        </div>
        <div className="form-group">
          <div className="row">
            <div className="col">
              <input placeholder='Dorm Name' type="text" value={dormName} onChange={(e) => setDormName(e.target.value)} />
            </div>
            <div className="col">
              <input placeholder='Dorm City' type="text" value={dormCity} onChange={(e) => setDormCity(e.target.value)} />
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="row">
            <div className="col">
              <input placeholder='Dorm Complete Address' type="text" value={dormCompleteAddress} onChange={(e) => setDormCompleteAddress(e.target.value)} />
            </div>
            <div className="col">
              <input placeholder='Dorm Pincode' type="text" value={dormPincode} onChange={(e) => setDormPincode(e.target.value)} />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label>Upload Pics of Dorm:</label>
          <input type="file" onChange={handleFileChange} multiple />
        </div>
        <div className="form-group">
          <label>Amenities of Dorm:</label>
          <div className="amenities">
            <label><input type="checkbox" value="Wi-Fi" checked={amenities.includes("Wi-Fi")} onChange={handleAmenityChange} /> Wi-Fi</label>
            <label><input type="checkbox" value="Laundry Facilities" checked={amenities.includes("Laundry Facilities")} onChange={handleAmenityChange} /> Laundry Facilities</label>
            <label><input type="checkbox" value="Daily Cleaning" checked={amenities.includes("Daily Cleaning")} onChange={handleAmenityChange} /> Daily Cleaning</label>
            <label><input type="checkbox" value="Free Parking" checked={amenities.includes("Free Parking")} onChange={handleAmenityChange} /> Free Parking</label>
            <label><input type="checkbox" value="Charging point per bed" checked={amenities.includes("Charging point per bed")} onChange={handleAmenityChange} /> Charging point per bed</label>
            <label><input type="checkbox" value="Paid Meals" checked={amenities.includes("Paid Meals")} onChange={handleAmenityChange} /> Paid Meals</label>
            <label><input type="checkbox" value="Washroom per room" checked={amenities.includes("Washroom per room")} onChange={handleAmenityChange} /> Washroom per room</label>
            {/* Add more amenities */}
          </div>
        </div>
        <div className="form-group">
          <div className="row">
            <div className="col">
              <input placeholder='No Of Beds' type="number" value={numberOfBeds} onChange={(e) => setNumberOfBeds(e.target.value)} />
            </div>
            <div className="col">
              <input placeholder='Price per Bed' type="number" value={pricePerBed} onChange={(e) => setPricePerBed(e.target.value)} />
            </div>
          </div>
        </div>
        <div className="form-group">
          <input placeholder='Cancellation Policy' type="text" value={cancellationPolicy} onChange={(e) => setCancellationPolicy(e.target.value)} />
        </div>
        <div className="form-group">
          <label>House Rules:</label>
          <div className="rules">
            {rules.map((rule, index) => (
              <div key={index} className="rule-item">
                <span>{rule}</span>
                <button type="button" onClick={() => removeRule(index)}>Remove</button>
              </div>
            ))}
          </div>
          <div className="add-rule">
            <input type="text" value={newRule} onChange={(e) => setNewRule(e.target.value)} placeholder="Add a new rule" />
            <button type="button" onClick={addRule}>Add Rule</button>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Host
