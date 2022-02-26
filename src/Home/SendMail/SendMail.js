import React from 'react';
import './SendMail.css';
import emailjs from 'emailjs-com';

const SendMail = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_tlhfhta',  'template_nqq4x75', e.target, 'user_0DcoR0vEtBiUEF2Bd3Ko5')
        .then(res=>{
            console.log(res);
        }).catch(err=> console.log(err));
    }

    return (
      <div className="SendMail" id="sendMail">
         <div className="getInTouch">
         <h1>Get In Touch</h1>
          <p>Have any query, sugesstion, new oppurtunity or anything to say? My inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
         </div>
          <div className="form">
              <h1>You can send a mail...</h1>
            <form 
            className="row"
            onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="name" className="form-control"/>
                <label>Email</label>
                <input type="email" name="user_email" className="form-control"/>
                <label>Massage</label>
                <textarea name="massage" row="4" className="form-control"/>
                <input type="submit" value="Send" className="form-control btn my-btn"/>
            </form>
          </div>
      </div>

      );
    }
    
    export default SendMail;