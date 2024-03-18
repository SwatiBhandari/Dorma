import './App.css';
import { useEffect } from 'react';
import Navigation_bar from './Components/navigation_bar';
import { BrowserRouter as Router, Route, Switch, Link, Routes, useLocation } from 'react-router-dom';
import './Components/navigation_bar.css'
import Header from './Components/Header';
import './Components/Header.css'
import Search_tab from './Components/Search_tab';
import './Components/Search_tab.css'
import Popular_carousal from './Components/Popular_carousal';
import './Components/Popular_carousal.css'
import Footer from './Components/Footer';
import './Components/Footer.css'
import Testimonial from './Components/Testimonial';
import './Components/Testimonial.css'
import Detail from './Components/Detail';
import './Components/Detail.css'
import Host from './Components/Host';
import Contact_us from './Components/Contact_us';
import { SharedStateProvider } from './Components/SharedStateContext';
import Display_images from './Components/Display_images';

function App() {
  return (
    <>
    <SharedStateProvider>
        <Router>
          <div className="App">
            <Navigation_bar/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/detail" element={<Detail />} />
              <Route path='/host' element={<Host/>} />
              <Route path='/contact_us' element={<Contact_us/>} />
              <Route path='/display_images' element={<Display_images/>} />
            </Routes>
            <Footer/>
            <ScrollToTop/>
          </div>
        </Router>

    </SharedStateProvider>
    </>
    
  );
}

const Home = () => (
  <>
    <Header/>
    <Search_tab/>
    <Popular_carousal/>
    <Testimonial/>
  </>
);

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}




export default App;
