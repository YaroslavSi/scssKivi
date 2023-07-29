import photo from '../../assets/icons/logo.png';
import { useState } from 'react';
const Navigator = (props) => {
    const [hamburgerIsOpen, setHamburgerOpen] = useState(false);
    const [menu, setMenu] = useState(false);
    let handleHamburgerClick = () => {
        setHamburgerOpen(!hamburgerIsOpen);
        setMenu(!hamburgerIsOpen);
    };
    // let handleMenuClick = () => {
        
    // };
    return (
        <header className="App_header">
            <navigator>
                <div class={menu ? 'menu_active' : 'menu'}>
                    <div class="menu_item"><a href="#" class="menu_item-link">HOME</a></div>
                    <div className="dropdown">
                        <div class="menu_item"><a href="#" class="menu_item-link">BOXES</a></div>
                        <div class="dropdown_content">
                            <a className='dropdown_content_text' href="#">What's inside</a>
                            <a className='dropdown_content_text' href="#">Kiwi Eco Box</a>
                        </div>
                    </div>
                    
                    
                    <div class="menu_item"><img class="menu_item_logo" src={photo} alt="logo"/></div>
                    <div class="menu_item"><a href="#" class="menu_item-link">ABOUT</a></div>
                    <div class="menu_item"><a href="#" class="menu_item-link">ACCOUNT</a></div>
                    
                </div>
                
            </navigator>
            <div class={hamburgerIsOpen ? 'hamburger' + ' ' + 'hamburger_active' : 'hamburger'} onClick={handleHamburgerClick}>
                <div class="hamburger_line"></div>
                <div class="hamburger_line"></div>
                <div class="hamburger_line"></div>
            </div>
        </header>
    )
}

export default Navigator;