import React, { useState,useEffect,useRef } from 'react'
import { Link} from 'react-router-dom'
import {auth,provider} from './firebase'
import {signInWithPopup,signOut} from 'firebase/auth'
import { Avatar } from '@mui/material'

function Navigation_bar() {

  const [user, setUser] = useState(null);
  const footerRef = useRef(null);
  

  useEffect(() => {
    // Check if user is already logged in from localStorage
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
        setUser(JSON.parse(loggedInUser));
    }
  }, []);

  const signIn = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            setUser(result.user);
            localStorage.setItem('user', JSON.stringify(result.user));
        })
        .catch((error) => alert(error.message));
  };

  const SignOut = () => {
    signOut(auth)
        .then(() => {
            setUser(null);
            // Remove user data from localStorage on sign out
            localStorage.removeItem('user');
            
        })
        .catch((error) => alert(error.message));
  };

  const handleHostClick = (event) => {
    if (!user) {
      event.preventDefault();
      const shouldSignIn = window.confirm('You need to login to host. Do you want to login?');
      if (shouldSignIn) {
        signInWithPopup(auth, provider)
        .then((result) => {
          setUser(result.user);
          localStorage.setItem('user', JSON.stringify(result.user));
          // Redirect the user to the host page
          window.location.href = '/host';
        })
        .catch((error) => alert(error.message));
      }
      
    }
  };


  return (
    <div className='navigation_bar'>
        <div className='nav_items_container'>
            <Link className='nav_link' to=''>Home</Link>
            <Link className='nav_link' to='/contact_us'>Contact</Link>
            <Link className='nav_link' onClick={handleHostClick} to='/host'>Host</Link>
        </div>
        {user ? (
          <div>
            <Link to="/">
              <Avatar onClick={SignOut} sx={{ bgcolor: '#24AB70' }} src={user.photoURL} alt={user.displayName} />
            </Link>
          </div>
                
            ) : (
                <button onClick={signIn} className='login_button'>Login</button>
        )}
    </div>
  )
}

export default Navigation_bar
