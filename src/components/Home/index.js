import { useEffect, useState } from 'react';
import LogoTitle from '../../assets/images/08-v2-big.png';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Logo from './Logo';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';

const Home = () => {
    const [letterClass,setLetterClass] = useState('text-animate')
    const nameArray = ['I','\'','m',' ','S', 'a', 'm', '.',]
    
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000);
        return () => clearTimeout(timeoutId);
    }, []);
    
    return (
        <>
        <div className="container home-page">   
        <div className="text-zone">
        <h1>        
        <AnimatedLetters
                    letterClass = {letterClass} 
                    strArray={['H','i',' ', 't', 'h', 'e', 'r', 'e', '👋',',']}
                    idx = {15}
                    />
        <br /> 
        <AnimatedLetters letterClass={letterClass}
        strArray={nameArray}
        idx={29}/> 
        <br />
        <img src ={LogoTitle} alt ="developer" /> 
        </h1>
        <h2>A Graduate Software Engineer from AUT, 
            constantly learning and exploring new 
            technologies in the world of software 
            development and data science. 👨‍💻</h2>
            <Link to="/website/contact" className='flat-button'> CONTACT ME </Link> 
        </div>
    </div>
    <Logo/> 
    <Loader type="pacman"/> 
    </> 
    ); 
}

export default Home 