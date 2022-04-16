import React from "react";

import "./index.scss";

const ContactDetailItem = ({ title, content }) => (
    <div className="feature">
        <img src="" />
        <h5 align="left">{title}</h5>
        <p align="left">{content}</p>
    </div>
);

export default ContactDetailItem;
