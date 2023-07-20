import photoO from '../../assets/images/One.png';
import photoTw from '../../assets/images/Two.png';
import photoTh from '../../assets/images/Three.png';
import Pop from '../pop/pop';


let Work = (props) => {
    

    return (
        <div className='work'>
            <div className="container">
                <h2 className='tittle'>How it Works</h2>

                <div className="work_list">
                    <div className="work_list_item">
                        <img src={photoO} alt="" />
                        <div className="main_descr">Join The Movement</div>
                        <div className="second_descr">Get started by signing up for monthly subscription. We bring you an easy way to start your zero-waste journey</div>
                    </div>
                    <div className="work_list_item">
                        <img src={photoTw} alt="" />
                        <div className="main_descr">Get Your Box</div>
                        <div className="second_descr">Every month receive your box with essential products, but plastic free and safe for the environment</div>
                    </div>
                    <div className="work_list_item">
                        <img src={photoTh} alt="" />
                        <div className="main_descr">Make a Difference</div>
                        <div className="second_descr">Small steps can lead to bigger changes, and now you are the change. Let's build community of people who care</div>
                    </div>
                </div>
                <div className="second_button">
                    <button className="general_btn">Get the Box</button>
                </div>
                
            </div>
        </div>
    )
}

export default Work;