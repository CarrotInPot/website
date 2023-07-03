import {Link, NavLink} from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose, faEnvelope, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);

    return(
    <div className='nav-bar'>
        <Link className='logo' to='/website/'>
            <img src={LogoS} alt="logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="samuelmeads" />
        </Link>
        <nav className={showNav ? 'mobile-show' : ' '}>
            <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" to="/website/">
                <FontAwesomeIcon icon={faHome} color ="#4d4d4e" />
                </NavLink>
            <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" className="about-link" to="/website/about">
                <FontAwesomeIcon icon={faUser} color ="#4d4d4e" />
                </NavLink>
            <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" className="portfolio-link" to="/website/portfolio">
                <FontAwesomeIcon icon={faSuitcase} color ="#4d4d4e" />
            </NavLink>
            <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" className="contact-link" to="/website/contact">
                <FontAwesomeIcon icon={faEnvelope} color ="#4d4d4e" />
            </NavLink>
            <FontAwesomeIcon 
            onClick={() => setShowNav(false)}
            icon ={faClose}
            color="#04517ab6"
            size = "3x"
            className='close-icon'
            />
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
        <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color = "#fba45c"
        size ="3x"
        className='hamburger-icon'
        />

    </div>
    )
}

export default Sidebar