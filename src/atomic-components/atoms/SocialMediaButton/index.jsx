import React from "react";

const SocialMediaButton = ({ name, link }) => (
    <a className="nav-link active" href={link}>{name}</a>
);

export default SocialMediaButton;
