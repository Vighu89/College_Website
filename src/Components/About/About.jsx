import React from 'react'
import './About.css';
import about_img from '../../assets/about.png';
import play_icon from '../../assets/play-icon.png';
const About = () => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src = {about_img} alt = '' className='about-img'/>
            <img src = {play_icon} alt = '' className='play-icon'/>
        </div>
        <div className='about-right'>
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>To create a transformative educational experience for students focused on deep disciplinary knowledge; problem solving; leadership, communication, and interpersonal skills; and personal health and well-being.</p>
        <p>To cultivate a transformative university community committed to  attracting and retaining diverse, world-class talent; creating a collaborative environment open to the free exchange of ideas, where research, creativity, innovation, and entrepreneurship can flourish; and ensuring individuals can achieve their full potential.</p>
        <p>To impact society in a transformative way — regionally, nationally, and globally — by engaging with partners outside the traditional borders of the university campus.</p>
        </div>
    </div>
    
  )
}

export default About