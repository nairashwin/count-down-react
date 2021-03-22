import React from "react";
import "../index.css";

function Icon() {
    return (
        <div className="icon-bar">
            <div className="social-media-icon" id="fb-icon"></div>
            <div className="social-media-icon" id="pin-icon"></div>
            <div className="social-media-icon" id="ig-icon"></div>
            {/* <img src="./images/icon-facebook.svg" alt="" className="social-media-icon" /> 
            <img src="./images/icon-pinterest.svg" alt="" className="social-media-icon" />
            <img src="./images/icon-instagram.svg" alt="" className="social-media-icon" /> */}
        </div>
    );
}

export default Icon;