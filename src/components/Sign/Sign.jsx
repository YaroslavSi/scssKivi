import React from "react";
import signLine from '../../assets/images/sign/Vector 10.png';
import signFormImg from '../../assets/images/sign/Im_Monstera.png';
import signBox from '../../assets/images/sign/Free_Carton_PSD_Packing_Box_Mockup 2.png';
import signLeaf from '../../assets/images/sign/PSDMarch2Pang1 1.png';
import signUp from '../../assets/images/sign/PSD2March2Pang1.png';
import signPacket from '../../assets/images/sign/PSDMarch42Pang1.png';
import signBottle from '../../assets/images/sign/PSDMarcрh2Pang1.png';
import signVector14 from '../../assets/images/sign/Vector 14.png';
import signVector15 from '../../assets/images/sign/Vector 15.png';
import signVector16 from '../../assets/images/sign/Vector 16.png';
import signAll from '../../assets/images/Group 906.png';

const Sign = (props) => {
    return (
        <div className="sign">
            <h2 className="sign_tittle">Stay in the know</h2>
            <div className="sign_subtittle">
                <img className="sign_subtittle_line" src={signLine} alt="" />
                <h2 className="sign_subtittle_one">Hear about the latest sneak peaks and spoilers</h2>
            </div>
            <h2 className="sign_genTittle">get CAUSEBOX delivered directly<br className="off"></br> <span className="sign_subTittle">to your inbox!</span></h2>

            <div className="sign_form">
                <div className="sign_wrapper">
                    <textarea name="" id="" cols="30" rows="10" className="sign_form_textarea"></textarea>
                    <button className="sign_form_btn">Sign up</button>
                    <img src={signFormImg} alt="" className="sign_form_img" />
                </div>
                <h3 className="sign_form_descr">By clicking "sign up" you agree to receive emails from CAUSEBOX and accept our web <span className="sign_underLine">terms of use</span> and <span className="sign_underLine">privacy and cookie policy</span></h3>
            </div>
            <div className="sign_collageAll">
                <img src={signAll} alt="" className="sign_collageAll_element" />
            </div>
            <div className="sign_collage">
                <img src={signBox} alt="" className="sign_collage_box" />
                <img src={signLeaf} alt="" className="sign_collage_leaf" />
                <img src={signUp} alt="" className="sign_collage_up" />
                <img src={signPacket} alt="" className="sign_collage_packet" />
                <img src={signBottle} alt="" className="sign_collage_bootle" />
                <img src={signVector14} alt="" className="sign_collage_vector14" />
                <img src={signVector15} alt="" className="sign_collage_vector15" />
                <img src={signVector16} alt="" className="sign_collage_vector16" />
            </div>
        </div>
    )
}

export default Sign;