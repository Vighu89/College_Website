import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Title from './Components/Title/Title';
import Programs from './Components/Programs/Programs';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Title subtitle = 'Our Program' title = 'What we offer'/>
      <div className="container">
      <Programs/>
      <About/>
      <Title subtitle = 'Gallery' title = 'Campus Photos'/>
      <Campus/>
      <Title subtitle = 'TESTIMONIALS' title = 'What students says'/>
      <Testimonials/>
      <Title subtitle = 'Contact us' title = 'Get in Touch'/>
      <Contact/>
      <Footer/>
      </div>
      
    </div>
  )
}

export default App
