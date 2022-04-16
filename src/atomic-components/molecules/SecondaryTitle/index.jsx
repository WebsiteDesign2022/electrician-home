import React from "react"

import TopLeftTriangle from "../../atoms/TopLeftTriangle";

const SecondaryTitle = ({ titlePartOne, titlePartTwo }) => (<div>
    <TopLeftTriangle color="black"/>
    <h1 className="display-5 lh-1 mb-3 justify-content-end" align="left">{titlePartOne}</h1>
    <h1 className="display-5 fw-bold lh-1 mb-3 align-content-start justify-content-end" align="left">{titlePartTwo}</h1>
</div>);

export default SecondaryTitle;