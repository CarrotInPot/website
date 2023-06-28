import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'
import { useEffect } from 'react'

const Contact = () => {
    const [letterClass,setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000);
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <>
        <div className='container contact-page'> 
        <div>
            <h1>
                <AnimatedLetters 
                letterClass = {letterClass}
                strArray={['C','o','n','t','a','c','t',' ','m','e']}
                idx={15}
                />
            </h1>
        </div>

        </div>
        <Loader type="pacman" /> 
        </>
    )
}

export default Contact 