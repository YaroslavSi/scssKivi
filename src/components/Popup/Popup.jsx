import React from 'react';
import pop from '../../assets/images/pop.png';
import popLine from '../../assets/images/Vector10.png';

const Popup = ({isOpen, setIsOpen}) => {
    const openPopup = () => {
        setIsOpen(true);
    };
    const closePopup = () => {
        setIsOpen(false);
    };
    return (
        <div className="popup">
            { isOpen && (
                <div className={isOpen ? "popup_container_active" : "popup_container"}>
                    <div className="pop_img">
                        <img className="popup_content_img" src={pop} alt="" />
                    </div>
                    
                    <div className="popup_content">
                        <div className="popup_content_header">Thank you for <span className="subscribing">subscribing!</span></div>
                        <img src={popLine} alt="" className="popup_content_line" />
                        <div className="popup_content_subheader">Now you will receive alerts when new news and boxes are released!</div>
                        <button className="popup_content_button" onClick={closePopup}>Good</button>
                    </div>
                </div>
            )}
        </div>
    )
}
export default Popup;