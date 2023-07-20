import photo from '../../assets/icons/logo.png';

const Navigator = (props) => {
    return (
        <header className="App_header">
            <navigator>
                <div class="menu">
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
        </header>
    )
}

export default Navigator;