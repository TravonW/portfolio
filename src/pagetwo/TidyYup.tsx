import '../index.css'
import TidyYupImg from '../assets/TidyYup.png'
import plusSign from '../assets/plusreal5.png'


function TidyYup(){
    return(
        <div >
            <ul className = "applicationBar">
                <li> 
                    <img className = "plusSign" src = {plusSign} />
                    <a href = "https://github.com/TravonW/ReactTidyup" target = "_blank">
                        <img className = "tidyYupImg" src = {TidyYupImg}/>
                    </a>
                    <img className = "plusSign2" src = {plusSign} />

                </li>
            </ul>
        </div>

    );
}
export default TidyYup