
import React, { useRef } from 'react';
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_8pn5p15', 'template_xlfmven', e.target, 'ZqcF4Pzr_lBUg3jBR')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  }



  return (

    

    <div className="text-gray-600 body-font relative">
      <form onSubmit={sendEmail}>
        <div className="row pt-5 mx-auto">
          <div className="col-8 form-group mx-auto">
            <input type="text" className="form-control" placeholder="Name" name="name" />
          </div>


          <div className="col-8 form-group pt-2 mx-auto">
            <input type="email" className="form-control" placeholder="Email Address" name="email" />
          </div>


          <div className="col-8 form-group pt-2 mx-auto">
            <input type="text" className="form-control" placeholder="Subject" name="subject" />
          </div>


          <div className="col-8 form-group pt-2 mx-auto">
            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
          </div>


          <div className="col-8 pt-3 mx-auto">
            <input type="submit" className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" value="Send Message"></input>
          </div>


        </div>
      </form>
    </div>
  );
};


export default Contact;