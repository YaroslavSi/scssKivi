import q from '../../assets/images/general/Im_2.png';
import w from '../../assets/images/general/Ellipse 16.png';
import e from '../../assets/images/general/Ellipse 17.png';
import r from '../../assets/images/general/Ellipse 24.png';
import elipse_13 from '../../assets/images/general/Ellipse 13.png';
import elipse_25 from '../../assets/images/general/Ellipse 25.png';
import lm_3 from '../../assets/images/general/Im_3.png';
import box from '../../assets/images/general/Free_Carton_PSD_Packing_Box_Mockup 2.png';
import leaf_b from '../../assets/images/general/Monstera leaf 1 - Plastic and metal - 0ш 2.png';
import leaf_c from '../../assets/images/general/PSDMarch2Pang1 1.png';
import shadow from '../../assets/images/general/Ellipse 7.png';
import elipse_19 from '../../assets/images/general/Ellipse 19.png';
import elipse_26 from '../../assets/images/general/Ellipse 26.png';
import packet from '../../assets/images/general/packet.png';
import elipse_23 from '../../assets/images/general/Ellipse 23.png';
import honey from '../../assets/images/general/honey.png';
import elipse_22 from '../../assets/images/general/Ellipse 22.png';
import elipse_14 from '../../assets/images/general/Ellipse 14.png';
import elipse_18 from '../../assets/images/general/Ellipse 18.png';
import elipse_1 from '../../assets/images/general/Ellipse 1.png';

const General = (props) => {
    return (
        <div className="general">
            <div className="container">
                <h1 className="general_tittle">Everything You Need</h1>
                <h2 className="general_subtittle_one">to Start Living Zero-Waste</h2>
                {/* <h2 className="general_subtittle_two">Zero-Waste</h2> */}
                <div className="list_items">
                    <img className="list_items_q" src={q} alt="" />
                    <img className="list_items_w" src={w} alt="" />
                    <img className="list_items_e" src={e} alt="" />
                    <img className="list_items_r" src={r} alt="" />
                    <img src={lm_3} alt="" className="list_items_t" />
                    <img src={elipse_13} alt="" className="list_items_y" />
                    <img src={elipse_25} alt="" className="list_items_u" />
                    <img src={box} alt="" className="list_items_box" />
                    {/* <img src={leaf_b} alt="" className="list_items_leafB" /> */}
                    <img src={leaf_c} alt="" className="list_items_leafC" />
                    <img src={shadow} alt="" className="list_items_shadow" />
                    <img src={elipse_19} alt="" className="list_items_elipse19" />
                    <img src={elipse_26} alt="" className="list_items_elipse26" />
                    <img src={packet} alt="" className="list_items_packet" />
                    <img src={elipse_23} alt="" className="list_items_elipse23" />
                    <img src={honey} alt="" className="list_items_honey" />
                    <img src={elipse_22} alt="" className="list_items_elipse22" />
                    <img src={elipse_14} alt="" className="list_items_elipse14" />
                    <img src={elipse_18} alt="" className="list_items_elipse18" />
                    <img src={elipse_1} alt="" className="list_items_elipse1" />
                    <svg className='list_items_vector1' xmlns="http://www.w3.org/2000/svg" width="478" height="275" viewBox="0 0 478 275" fill="none">
                        <path d="M478 0.999759C428 0.999757 445.576 70.9999 421 125C392.076 188.554 365.888 235.529 233 265C55.1209 304.449 43.0003 197.153 109 186.153C175 175.153 188 250.153 117 250.153C45.9998 250.153 15 220 0.563788 181.469" stroke="#D69914" stroke-dasharray="10 10"/>
                    </svg>
                    <svg className='list_items_vector2' xmlns="http://www.w3.org/2000/svg" width="166" height="70" viewBox="0 0 166 70" fill="none">
                        <path d="M165 69.0001C151 -3.99994 44 -17 1 26.0001" stroke="#D69914" stroke-dasharray="10 10"/>
                    </svg>
                    <svg className='list_items_vector3' xmlns="http://www.w3.org/2000/svg" width="160" height="84" viewBox="0 0 160 84" fill="none">
                        <path d="M0.999949 62.3258C55.2073 113.184 149.441 60.8587 158.986 0.80131" stroke="#D69914" stroke-dasharray="10 10"/>
                    </svg>
                    <svg className='list_items_vector4' xmlns="http://www.w3.org/2000/svg" width="492" height="170" viewBox="0 0 492 170" fill="none">
                        <path d="M490.688 0.133116C476.726 67.0813 413.527 57.1878 369.694 75.2905C325.862 93.3933 273.308 141.311 315.679 165.242C358.05 189.174 382.333 99.0445 305.702 78.6085C229.071 58.1725 157 225 1.00012 75.2905" stroke="#D69914" stroke-dasharray="10 10"/>
                    </svg>
                </div>
                <button onClick={() => {props.setIsOpen(true)}} className="general_button">Start now</button>
            </div>
        </div>
    )
}

export default General;