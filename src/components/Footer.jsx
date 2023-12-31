import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../styles/Footbar.css'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <FacebookIcon/>
            <InstagramIcon />
            <TwitterIcon />
        </div>
        <p>All Rights Reserved | Burgeran</p>
    </div>
  )
}
