import FaceCard from './FaceCard'
import SocialsBar from './SocialsBar'
import './index.css';
import NamePlate from './NamePlate'
import Intro from './Intro'
import PhotographyPlate from './pagethree/PhotographyPlate'

import PortfolioPlate from './pagetwo/PortfloioPlate'
import TidyYup from './pagetwo/TidyYup'


function App() {

  return (
   <div className = "scroll-container">
    <section className = "viewport-section1">
      <NamePlate/>
      <Intro/>
      <SocialsBar/>
      <FaceCard/>

    </section>
    <section className = "viewport-section2">
      <PortfolioPlate/>
      <TidyYup/>
      
      
    </section>
   {/* <section className = "viewport-section3">
      <PhotographyPlate/>

    </section>
   */}
   </div>
  )
}

export default App
