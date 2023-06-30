import {Link, NavLink} from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="samuelmeads" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/website/">
                <FontAwesomeIcon icon={faHome} color ="#4d4d4e" />
                </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/website/about">
                <FontAwesomeIcon icon={faUser} color ="#4d4d4e" />
                </NavLink>
            <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/website/portfolio">
                <FontAwesomeIcon icon={faSuitcase} color ="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/website/contact">
                <FontAwesomeIcon icon={faEnvelope} color ="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target = "_blank" rel='noreferrer' href='https://www.linkedin.com/in/samuel-meads/'>
                    <FontAwesomeIcon icon={faLinkedinIn} color = "#4d4d4e" /> 
                </a> 
            </li>
            <li>
                <a target = "_blank" rel='noreferrer' href='https://github.com/CarrotInPot'>
                    <FontAwesomeIcon icon={faGithub} color = "#4d4d4e" /> 
                </a> 
            </li>
        </ul>
    </div>
)

export default Sidebar