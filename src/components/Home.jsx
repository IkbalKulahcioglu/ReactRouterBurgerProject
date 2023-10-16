import React from 'react'
import {Link} from 'react-router-dom'
import BannerImage from '../assets/banner1.png'
import '../styles/Home.css'
export const Home = () => {
  return (
    <div className='mainPage'
    style={{backgroundImage: `url(${BannerImage})`}}>
      <div className='order'>
        <Link to="/menu">
          <button>ORDER NOW!!</button>
        </Link>
      </div>
    </div>
  )
}
