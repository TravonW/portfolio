import './index.css'
import Linkedin from './assets/linkedinlogo.svg'
import Github from './assets/githublogor.png'

function SocialsBar (){
    return(
        <div>
            <ul className = "socialsBar">
                <li >
                    <a href = "https://www.linkedin.com/in/travon-williams-04009b245/" 
                        target = "blank"> <img className = "linkedinImg" src = {Linkedin}/></a>
                    <a href = "https://github.com/TravonW" target= "blank">
                        <img className = "githubImg" src ={Github}/>
                    </a>
                    <a href = "https://docs.google.com/document/d/1rXS34hQ-LOFO62ML7eT3BRDF1zAGHyNtgVgGyUokO_4/edit?usp=sharing" 
                        target = "blank" rel="noopener noreferrer">
                        <p className = "resume"> Resume</p>
                    </a>
                </li>
            </ul>
        </div>

    );
}

export default SocialsBar