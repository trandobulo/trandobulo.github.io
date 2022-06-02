import Button from './Button.jsx';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import aboutFoto from "./content/aboutFoto.jpg";
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faAt, faGraduationCap, faLocationDot, faPaperPlane} from '@fortawesome/free-solid-svg-icons';

function About(){
    return (
        <div className="about">
        <img className="aboutFoto" src={aboutFoto} alt="author foto"/>
        <div className="aboutInfo">
            <h2>More Info About Me</h2>
            <p>I am an enthusiastic and detail-oriented beginner Front-end Developer,
            seeking an entry position in a company, to use and improve my skills in 
            commercial project development. While studying I'm trying to have a deep
            understanding of every new technology and am always highly motivated to 
            solve the unfamiliar complex tasks</p>
            <div className="aboutDetails">
                <p><FontAwesomeIcon className="aboutDetailsIcon" icon={faLinkedin}/><a href="https://linkedin.com/in/trandobulo/">Linkedin</a></p>
                <p><FontAwesomeIcon className="aboutDetailsIcon" icon={faAt}/><a href="mailto: trandobulo@gmail.com">trandobulo@gmail.com</a></p>
                <p><FontAwesomeIcon className="aboutDetailsIcon" icon={faGraduationCap}/><a href="https://onmu.odessa.ua">ONMU</a></p>
                <p><FontAwesomeIcon className="aboutDetailsIcon" icon={faInstagram}/><a href="instagram.com//trand.oleksandr">Instagram</a></p>
                <p><FontAwesomeIcon className="aboutDetailsIcon" icon={faPaperPlane}/><a href="https://t.me/trand_alexandr">+380938190948</a></p>
                <p><FontAwesomeIcon className="aboutDetailsIcon" icon={faLocationDot}/>Odessa, Ukraine</p>
            </div>
            <div className='aboutButtons'>
            <Button label='Download C.V.' type='secondary'/>
            <Button label='Hire Me' type='primary' />
            </div>
        </div>
        </div>
    )
}

export default About;