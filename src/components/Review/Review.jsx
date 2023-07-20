import React from "react";
import client from '../../assets/images/review/reviewClient.png';
import reviewPhoto26 from '../../assets/images/review/image 26.png';
import reviewPhoto28 from '../../assets/images/review/image 28.png';
import reviewPhoto25 from '../../assets/images/review/image 25.png';
import reviewPhoto13 from '../../assets/images/review/image 13.png';
import reviewEllipse15 from '../../assets/images/review/Ellipse 15.png';
import reviewEllipse14 from '../../assets/images/review/Ellipse 14.png';
import reviewEllipse18 from '../../assets/images/review/Ellipse 18.png';
import reviewWave from '../../assets/images/review/Vector 22.png';
import reviewVector from '../../assets/images/review/Vector 26.png';
import reviewStar from '../../assets/images/review/star.png';
import reviewLine from '../../assets/images/review/line.png';
import leftArrow from '../../assets/images/review/down-arrow 2.png';
import rightArrow from '../../assets/images/review/down-arrow 2right.png';
import backtick from '../../assets/images/review/“.png';
import reviewEllipse144 from '../../assets/images/review/Ellipse 144.png';
import reviewEllipse25 from '../../assets/images/review/Ellipse 25.png';
import lineWorm from '../../assets/images/review/lineWorm.png';


const Review = (props) => {
    return (
        <div className="review">
            <div className="container">
                <div className="review_container">
                    <h2 className="review_header">What do our</h2>
                    <h2 className="review_subheader">clients say</h2>
                    <div className="review_images">
                        <img src={client} alt="" className="review_clientPhoto" />
                        <img src={reviewPhoto26} alt="" className="review_clientPhoto26" />
                        <img src={reviewPhoto28} alt="" className="review_clientPhoto28" />
                        <img src={reviewPhoto13} alt="" className="review_clientPhoto13" />
                        <img src={reviewPhoto25} alt="" className="review_clientPhoto25" />
                        <img src={reviewEllipse15} alt="" className="review_ellipse15" />
                        <img src={reviewEllipse14} alt="" className="review_ellipse14" />
                        <img src={reviewEllipse18} alt="" className="review_ellipse18" />
                        <img src={reviewWave} alt="" className="review_wave" />
                        <img src={reviewVector} alt="" className="review_vector" />
                        <img src={backtick} alt="" className="review_backtick" />
                        <img src={reviewEllipse15} alt="" className="review_ellipse155" />
                        <img src={reviewEllipse144} alt="" className="review_ellipse144" />
                        <img src={reviewEllipse25} alt="" className="review_ellipse25" />
                        <img src={lineWorm} alt="" className="review_lineWorm" />
                    </div>
                </div>

                <div className="message_wrapper">
                    <div className="message_header">
                        <h2 className="message_header_general">Jessica T.</h2>
                        <div className="message_header_stars">
                            <img src={reviewStar} alt="" className="message_header_stars_star" />
                            <img src={reviewStar} alt="" className="message_header_stars_star" />
                            <img src={reviewStar} alt="" className="message_header_stars_star" />
                            <img src={reviewStar} alt="" className="message_header_stars_star" />
                            <img src={reviewStar} alt="" className="message_header_stars_star" />
                            <div className="message_header_stars_mark">5/5</div>
                        </div>
                    </div>
                    <div className="message_descr">
                        <img src={reviewLine} alt="" className="message_descr_wave" />
                        <h3 className="message_descr_first">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </h3>
                        <h3 className="message_descr_second">Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore <span className="message_descr_second_invisible">magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</span></h3>
                        
                        <div className="message_descr_buttons">
                            <button className="message_descr_btnLeft">
                                <img src={leftArrow} alt="" />
                            </button>
                            <button className="message_descr_btnRight">
                                <img src={rightArrow} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review;