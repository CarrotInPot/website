import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect,useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3Alt, faHtml5, faJava, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
    const [letterClass,setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000);
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass = {letterClass} 
                    strArray={['A','b','o','u','t', ' ', 'm', 'e']}
                    idx = {15}
                    />
                </h1>
                <p>
                I'm a Software Engineering student seeking a summer software
                engineering internship position where I can apply my skills.  
                </p>
                <p>
                With Skills in Java, C++, Python, SQL, HTML, CSS, JavaScript, and Git, my focus is on problem-solving, 
                algorithm design, and data structures, backed by a strong commitment to teamwork and effective communication. 
                </p>
                <p>
                I'm eager to contribute to innovative software solutions and delve deeper into cloud 
                computing and scalable software design to create efficient, user-friendly systems.
                </p>
                <p>
                Things im involved in:
                </p>
                <p>
                •	Software Engineering Student Representative 
                </p>
                <p>
                •	CSEA (Computer Science & Engineering Association) General Executive 
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faPython} color ="#050e0b" /> 
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color ="#F06529" /> 
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faJava} color ="#f70d0c" /> 
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color ="#5ED4F4" /> 
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color ="#EFD81D" /> 
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faCss3Alt} color ="#28A4D9" /> 
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman"/> 
        </>
    )
}

export default About