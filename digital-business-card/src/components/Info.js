import React from "react";
import DP from '../DP.jpeg';

function Info () {
    return (
        <div className="info">
            <img src={DP} className="dp-img" />

            <div className='name-info'>
                <h3>Shanmukh Sai Madhu</h3>
                <p>Frontend Developer</p>
                <small>shanmukhsaimadhu.website</small>
            </div>

            <div className="buttons-info">
                <a href="mailto: madhushanmukhsai@gmail.com" target="blank"><button className="email-btn"><i class="fa-solid fa-envelope"></i>Email</button></a>
                
                <a href="https://www.linkedin.com/in/shanmukh-sai-madhu-4904071b1/" target="blank"><button className="linkedin-btn"><i class="fa-brands fa-linkedin"></i>Linkedin</button></a>
                
            </div>
        </div>
    )
}

export default Info



