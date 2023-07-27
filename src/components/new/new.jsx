import newF from '../../assets/images/new/Mask Group.png';
import newS from '../../assets/images/new/image 13.png';
import newT from '../../assets/images/new/image 14.png';
import lineBg from '../../assets/images/new/line_bg.png';
import newLine from '../../assets/images/new/line.png';


const New = (props) => {
    return (
        <div className="new">
            <div className="container">
                <div className="new_tittle">What's new in blog?</div>
                <div className="new_wrapper">
                    <img src={lineBg} alt="" className="new_wrapper_background" />
                    <div className="new_list_alive">
                        <img className="new_list_alive_img" src={newF} alt="" />
                        <div className="new_list_header">Why KIWI Eco Box?</div>
                        <img src={newLine} alt="" className="new_list_line" />
                        <div className="new_list_subheader">Get started by signing up for monthly subscription. We bring you an easy way to start your zero-waste journey</div>
                        <button className="new_list_button">Read more</button>
                    </div>
                    <div className="new_list">
                        <img src={newS} alt="" />
                        <div className="new_list_header">What Is Inside The April Kiwi Eco Box? Portable Lunch Box</div>
                        <img src={newLine} alt="" className="new_list_line" />
                        <div className="new_list_subheader">Every month receive your box with essential products, but plastic free and safe for the environment</div>
                        <button className="new_list_button">Read more</button>
                    </div>
                    <div className="new_list">
                        <img src={newT} alt="" />
                        <div className="new_list_header">Make a Difference</div>
                        <img src={newLine} alt="" className="new_list_line" />
                        <div className="new_list_subheader">Small steps can lead to bigger changes, and now you are the change. Let's build community of people who care</div>
                        <button className="new_list_button">Read more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New;