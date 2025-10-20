import './index.css';
import FlowerHead from './assets/flowerHead.jpg'
import Dandelion from './assets/petals.png'


function FaceCard () {

    return(
        <div className = "card">
            <img className = "petals" src = {Dandelion}/>
            <img className = "cardImage" src = {FlowerHead} />
        </div>

    );
}

export default FaceCard