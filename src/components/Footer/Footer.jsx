import React from "react";
import footerLogo from '../../assets/images/footer/image 1.png';
import fb from '../../assets/images/footer/facebook.png';
import inst from '../../assets/images/footer/instagram.png';
import twit from '../../assets/images/footer/twitter.png';
import utube from '../../assets/images/footer/youtube.png';

const Footer = (props) => {
    return (
        <footer>
            <div className="container">
                <div className="footer_wrapper">
                    <a href="#" className="footer_links">Home</a>
                    <a href="#" className="footer_links">Boxes</a>
                    <a href="#" className="footer_links">About</a>
                    <a href="#" className="footer_links">Account</a>
                    <a href="#" className="footer_links">blog</a>
                    <img src={footerLogo} alt="" className="footer_logo" />
                    <a href="#" className="footer_links">Faq</a>
                    <a href="#" className="footer_links">CONTACT US</a>
                <div className="footer_social">
                    <a className="footer_social_fb" href="#"><img src={fb} alt="" /></a>
                    <a className="footer_social_inst" href="#"><img src={inst} alt="" /></a>
                    <a className="footer_social_twit" href="#"><img src={twit} alt="" /></a>
                    <a className="footer_social_utube" href="#"><img src={utube} alt="" /></a>
                </div>
                </div> 
            </div>
        </footer>
    )
}

export default Footer;