
import React from 'react';

import ContactDetailItem from '../../molecules/ContactDetailItem';

import './index.scss';

const ContactUs = () => (
    <div className="row contact-us">
        <div className="col-md-8 row form-group">
            <div className="row">
                <div className="col-sm-6">
                    <input 
                        id="name" 
                        className="form-control contact-input" 
                        type="text" 
                        placeholder="Name" 
                        aria-label="Name"/> 
                </div>
                <div className="col-sm-6">
                    <input 
                        id="email-address" 
                        className="form-control contact-input" 
                        type="text" 
                        placeholder="Email" 
                        aria-label="Email Address"/>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <textarea className="form-control contact-input" rows="5" placeholder="Message" id="message"></textarea>
                </div>
            </div>

            <div className="row justify-content-end">
                <div className="col-9"></div>
                <div className="col-3">
                    <button type="button" className="btn rounded-0 button-right submit">SUBMIT</button>
                </div>
            </div>
            
        </div>
        <div className="col-md-4">

            <ContactDetailItem
                title="Address"
                content="1234 Divi St., #1000, San Francisco, CA 29362"
            />

            <ContactDetailItem
                title="Phone"
                content="(346) 234 5675"
            />

            <ContactDetailItem
                title="Email"
                content="info@divelectric.com"
            />

        </div>
    </div>
);

export default ContactUs;