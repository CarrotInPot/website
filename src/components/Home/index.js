import { useState } from 'react';
import LogoTitle from '../../assets/images/08-v2-big.png';
import AnimatedLetters from '../AnimatedLetter';
import './index.scss';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['s', 'a', 'm']
    return (
        <div className="container home-page">   
     <div className="text-zone">
        <h1>Hi there, <br /> I'm Sam
        <br /> 
        <img src ={LogoTitle} alt ="developer" /> 
        <AnimatedLetters letterClass={letterClass}
        strArray={nameArray}
        idx={15}/> 
        <br />  
        </h1>
        <h2>Software Engineering student at AUT, constantly learning and exploring new technologies in the world of software development and data science.</h2>
        </div>
    </div> 
    ); 
}

export default Home     