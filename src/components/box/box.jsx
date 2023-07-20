import photoFlyF from '../../assets/images/PSD2March2Pang1.png';
import photoFlyS from '../../assets/images/PSDMarch42Pang1.png';
import photoFlyT from '../../assets/images/PSDMarcрh2Pang1.png';
import photoGen from '../../assets/images/imageG.png';
import line from '../../assets/images/box/line.png';
import leafMonstr from '../../assets/images/box/Monstera leaf 1 - Plastic and metal - 0ш 3.png';




let box = (props) => {
    return (
        
            <div className="box">
                <div className="box_fly">
                    <img className="box_fly_first" src={photoFlyF} alt="" />
                    <img className="box_fly_second" src={photoFlyS} alt="" />
                    <img className="box_fly_third" src={photoFlyT} alt="" />
                    <img src={photoGen} alt="" className="box_fly_staticF" />
                    <img src={photoGen} alt="" className="box_fly_staticS" />
                </div>

                    

            <div className="box_card">
                <div className='box_card_container'>
                    <img className='box_card_line' src={line} alt="" />
                    <div className="box_card_tittle">BOX OF A MONTH</div>
                </div>
                
                <div className="box_card_descr">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </div>
                <div className="box_card_wrapperButton">
                    <button className="box_card_btn">See What's Inside</button>
                    <img src={leafMonstr} alt="" className="box_card_fly" />
                </div>
                
            </div>
        </div>
    )
}

export default box;