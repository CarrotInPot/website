import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import LogoTitle from '../../assets/images/08-v2-big.png';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Logo from './Logo';

const Home = () => {
    const [letterClass,setLetterClass] = useState('text-animate')
    const introArray = ['H','i',' ', 't', 'h', 'e', 'r', 'e', ',']
    const nameArray = ['I','\'','m',' ','S', 'a', 'm', '.']
    
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000);
        return () => clearTimeout(timeoutId);
    }, []);
    
    return (
        <div className="container home-page">   
     <div className="text-zone">
        <h1>        
        <AnimatedLetters letterClass={letterClass}
        strArray={introArray}
        idx={10}/>  
        <br /> 
        <AnimatedLetters letterClass={letterClass}
        strArray={nameArray}
        idx={29}/> 
        <br />
        <img src ={LogoTitle} alt ="developer" /> 
        </h1>
        <h2>A Software Engineering student at AUT, 
            constantly learning and exploring new 
            technologies in the world of software 
            development and data science.</h2>
            <Link to="/contact" className = "flat-button">
                CONTACT ME 
            </Link>
        </div>
        <Logo/>
    </div> 
    ); 
}

export default Home 