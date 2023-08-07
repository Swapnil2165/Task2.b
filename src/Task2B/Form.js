import React, { useState } from 'react';
// import "./Form.css";

const ContactForm = () => {
  const [contactType, setContactType] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleContactTypeChange = (event) => {
    setContactType(event.target.value);
  };

  return (
    <div className="container  mt-5 ">
      <div className='card'>
        <div className='card-body'>
        <div className="row mt-4">
            <div className="form-group col-sm-6">
                              <label for="inputFirstName">First Name</label>
                              <input type="FirstName"
                               class="form-control" 
                               id="inputFirstName"
                                value={firstName}
                               onChange={(event) => setFirstName(event.target.value)}
                                />
            </div>
            <div className="form-group col-sm-6">
                              <label for="inputLastName">Last Name</label>
                              <input type="FirstName"
                               class="form-control" 
                               id="inputLastName"
                                value={lastName}
                               onChange={(event) => setLastName(event.target.value)}
                                />
            </div>
        </div>
        <div className="row mt-4">
        <div className="form-group col-sm-6">
            <label For="contactType">How should we contact you?</label><br></br>
           <div class="custom-control custom-radio custom-control-inline">
            <input
             type="radio" 
             id="customRadio1" 
             name="customRadio" 
             class="custom-control-input"
                value="phone"
                checked={contactType === 'phone'}
                onChange={handleContactTypeChange}
             />
            <label class="custom-control-label" for="customRadio1">Phone</label>
          </div>
            <div class="custom-control custom-radio custom-control-inline">
            <input
             type="radio" 
             id="customRadio2" 
             name="customRadio" 
             className="custom-control-input"
             value="email"
             checked={contactType === 'email'}
              onChange={handleContactTypeChange}
             />
            <label class="custom-control-label" for="customRadio2">Email</label>
          </div>
          </div>
          <div className="form-group col-sm-6">
          {contactType === 'phone' && (
            <div className="">
              <label htmlFor="phone">Phone Number</label><br></br>
              <input className='form-control'
                type="text"
                id="phone"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
            </div>
          )}
          {contactType === 'email' && (
            <div className="">
              <label htmlFor="email">Email Address</label><br></br>
              <input className='form-control'
                type="email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
          )}
        </div>
        </div>
        </div>
        </div>
      </div>
  );
};

export default ContactForm;