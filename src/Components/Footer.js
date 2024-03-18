import React from 'react'
import dot from '../img/dot.svg'
import insta from '../img/instagram.svg'
import facebook from '../img/facebook.svg'
import twitter from '../img/twitter.svg'

function Footer() {
  return (
    <>
    <div className='main_footer'>
    <div className='footer'>
        <div className='footer_1'>
            <div className='support'>
                <p className='support_title'>Support</p>
                <p className='subtitles'>Help Center</p>
                <p className='subtitles'>Cancellation options</p>
                <p className='subtitles'>Safety</p>
            </div>
            <div className='hosting'>
                <p className='hosting_title'>Hosting</p>
                <p className='subtitles'>Host your dorm</p>
                <p className='subtitles'>Hosting resource</p>
            </div>
            <div className='dorma'>
                <p className='dorma_title'>Dorma</p>
                <p className='subtitles'>New features</p>
                <p className='subtitles'>Career</p>
                <p className='subtitles'>Investers</p>
            </div>
        </div>
        <hr/>
        <div className='footer_2'>
            <div className='footer_2_left'>
                <p>© 2024 Dorma, Inc.</p>
                <img src={dot} className='dot'/>
                <p>Privacy</p>
                <img src={dot} className='dot'/>
                <p>Terms</p>
                <img src={dot} className='dot'/>
                <p>Company details</p>
            </div>
            <div className='footer_2_right'>
                <img className='social' src={facebook}/>
                <img className='social' src={twitter}/>
                <img className='social' src={insta}/>
            </div>
            
        </div>
      
      
    </div>
    </div>
    </>
  )
}

export default Footer
