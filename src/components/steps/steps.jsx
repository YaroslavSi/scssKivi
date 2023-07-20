import React from "react";
import waveSteps from '../../assets/images/steps/line.png';
import legSteps from '../../assets/images/steps/Group 4.png';
import lineSteps from '../../assets/images/steps/Im_line.png';


const Steps = (props) => {
    return (
        <div className="steps">
            <div className="wrapper">
                <div className="steps_cont">
                    <img src={waveSteps} alt="" className="steps_cont_img" />
                    <h2 className="steps_cont_text">OUR MISSION</h2>
                </div>
                <div className="steps_wrap">
                    <img src={legSteps} alt="" className="steps_wrap_img" />
                    <h2 className="steps_wrap_text">We are here to help you live greener and more sustainably</h2>
                </div>
                <h2 className="steps_text">Small steps matter </h2>
                <img className="steps_line" src={lineSteps} alt="" />
            </div>
        </div>
    )
}

export default Steps;