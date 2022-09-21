import React from 'react'
import Categories from '../../components/Categories/Categories';
import Navbar from '../../components/Navbar/Navbar'
import Product from '../../components/Product/Product';
import Slider from '../../components/Slider/Slider';
import Announcement from './../../components/Announcement/Announcement';

const Home = () => {
  return (
    <div>
        <Announcement/>
       <Navbar />
       <Slider/>
       <Categories />
       <Product />
    </div>
  )
}

export default Home