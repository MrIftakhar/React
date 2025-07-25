import React from 'react'
import Card from './Pages/BlogWebsite/Card';
import Navbar from './Pages/BlogWebsite/Navbar'
import Carousel from './Pages/BlogWebsite/Carousel';
import Page from './Page';
import Footer from './Footer';

function Home() {
  return (
    <>
    <Navbar/>
    <div className="container">
        
    <Carousel/>
      <div class="row">
        <div class="col-md-4">
          <Card img= "img/6.jpg" title= "Web Development Basics" p="HTML, CSS, and JavaScript are the core technologies for building websites." link="" BtnName="See Post"/>
        </div>
        <div class="col-md-4">
          <Card img= "img/5.jpg" title= "Beauty of Dhaka" p="Dhaka’s beauty lies in its vibrant culture, historic landmarks, and lively streets." link="" BtnName="See Post"/>
        </div>
        <div class="col-md-4">
          <Card img= "img/7.jpg" title= "MySQL & SEO" p="MySQL helps manage and organize website data efficiently, improving site performance and SEO." link="" BtnName="See Post"/>
        </div>
        <div class="col-md-4">
          <Card img= "img/reactjs.png" title= "Introduction to React" p="React is a JavaScript library for building fast, interactive user interfaces with reusable components and efficient state management." link="" BtnName="See Post"/>
        </div>
        <div class="col-md-4">
          <Card img= "" title= "Not Post Yeat" p="Not Post Yeat" link="" BtnName="......"/>
        </div>
        <Page/>
      </div>
      </div>
      <Footer/>
      </>
  )
}

export default Home