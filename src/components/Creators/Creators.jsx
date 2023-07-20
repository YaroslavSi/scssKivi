import React from "react";
import creatorsLogo from '../../assets/images/footer/Frame.png';

const Creators = (props) => {
    return (
        <div className="creators">
                <h2 className="creators_header">Kiwi Eco Box © 2021</h2>
                <h2 className="creators_developers">Development by SheepFish</h2>
                <img src={creatorsLogo} alt="" className="creators_logo" />
        </div>
    )
}

export default Creators;