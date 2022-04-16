import React from "react";
import SocialMediaButton from "../../atoms/SocialMediaButton";

const SocialMediaButtonGroup = () => (
    <ul className="nav">
        <li className="nav-item">
            <SocialMediaButton name="Meta" link="#" />
        </li>
        <li className="nav-item">
            <SocialMediaButton name="Twitter" link="#" />
        </li>
        <li className="nav-item">
            <SocialMediaButton name="RSS" link="#" />
        </li>
    </ul>
);

export default SocialMediaButtonGroup;
