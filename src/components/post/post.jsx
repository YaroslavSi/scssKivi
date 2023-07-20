import photo1 from '../../assets/images/gri/1.png';
import photo2 from '../../assets/images/gri/2.png';
import photo3 from '../../assets/images/gri/3.png';
import photo4 from '../../assets/images/gri/4.png';
import photo5 from '../../assets/images/gri/5.png';
import photo6 from '../../assets/images/gri/6.png';
import photo7 from '../../assets/images/gri/7.png';
import postInst from '../../assets/images/steps/Instagram.png';
import elipse22 from '../../assets/images/steps/Ellipse 22.png';
import elipse21 from '../../assets/images/steps/Ellipse 21.png';



let Post = (props) => {
    return (
        <div className='post'>
            <div className="container">
                <h2 className="post_first">Join the conversation an help us create a new world!</h2>
                <h3 className="post_second">Recent Posts</h3>
                <div className="gri">
                    <div className="first"><img src={photo1} alt="" className="gri_photo_img" /></div>
                    <div className="second"><img src={photo2} alt="" className="gri_photo_img" /></div>
                    <div className="third"><img src={photo3} alt="" className="gri_photo_img" /></div>
                    <div className="fouth"><img src={photo4} alt="" className="gri_photo_img" /></div>
                    <div className="fifth"><img src={photo5} alt="" className="gri_photo_img" /></div>
                    <div className="six"><img src={photo6} alt="" className="gri_photo_img" /></div>
                    <div className="seven"><img src={photo7} alt="" className="gri_photo_img" /></div>
                </div>
                <img src={postInst} alt="" className="post_photo_inst" />
                <img src={elipse22} alt="" className="post_photo_elipse22" />
                <img src={elipse21} alt="" className="post_photo_elipse21" />
            </div>
        </div>
    )
}

export default Post;