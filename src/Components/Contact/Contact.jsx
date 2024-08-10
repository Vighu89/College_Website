import React from 'react'
import './Contact.css';
import msg_icon from '../../assets/msg-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';
const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "aa6795d7-46fc-4854-9c1d-55faa7da60ac");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };


  return (
    <div className='contact'>
        <div className='contact-col'>
        <h3>Send us Message<img src = {msg_icon} alt = ''/></h3>
        <p>Feel Free to reach out through contact form or find out contact information below. Your feedback,questions and suggestions are important to tus as we strive to provide the exceptional service to our university community</p>
        <ul>
            <li><img src = {mail_icon}/>Contact@VighneshStack.dev</li>
            <li><img src = {phone_icon}/>+91 6455908762</li>
            <li><img src = {location_icon}/>Malabar hill<br/>
            Mumbai-400006</li>
        </ul>
        </div>
        <div className='contact-col'>
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type = 'text' placeholder='Enter your name' required/>
                <label>Phone Number</label>
                <input type = 'tel' placeholder='Enter your phone number' required/>
                <label>Write your Message here</label>
                <textarea rows = '6' placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit Now <img src = {white_arrow}/></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact