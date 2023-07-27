import logo from './logo.svg';
import './css/style.min.css';
import Navigator from './components/navigator/navigator';
import Work from './components/work/work';
import Box from './components/box/box';
import Post from './components/post/post';
import New from './components/new/new';
import General from './components/general/general';
import Steps from './components/steps/steps';
import Sign from './components/Sign/Sign';
import Review from './components/Review/Review';
import Footer from './components/Footer/Footer';
import Creators from './components/Creators/Creators';
import Popup from './components/Popup/Popup';
import { useState } from 'react';


function App() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div >
      <Navigator />
      <Popup isOpen={isOpen} setIsOpen={setIsOpen} />
      <General isOpen={isOpen} setIsOpen={setIsOpen}/>
      <Work />
      <Box />
      <Steps />
      <Post />
      <New />
      {/* <Sign /> */}
      <Review />
      <Footer />
      <Creators />
      
    </div> 
  );
}

export default App;
