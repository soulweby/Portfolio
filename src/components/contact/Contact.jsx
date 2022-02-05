import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import "./contact.scss"


export default function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_7lupmur', 'template_nde321r', form.current, 'user_WoH5Ve9dsym3hhuHiRPBm')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };


    return (
        <div className="contact" id="contact">

            <div className="left">
                <img src="assets/fla.svg" alt='contact illustration' />
            </div>
            <div className="right">
                    <h2>Contact.</h2>
                    <form  ref={form} onSubmit={sendEmail}>
                        <input type="text"  placeholder="Email" />
                        <textarea placeholder="Message"></textarea>
                        <button type="submit">Send</button>
                    </form>
            </div>
        </div>
    )
}
