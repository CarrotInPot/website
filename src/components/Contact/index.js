import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [letterClass,setLetterClass] = useState('text-animate')
    const form = useRef()

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000);
        return () => clearTimeout(timeoutId);
    }, []);

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
        .sendForm(
            'service_sx3tjs7',
            'template_v1rfwjv',
            form.current,
            'bXuWB95ZKg9XE9Z3Y'
        )
        .then (
            () => {
                alert('Message sucessfully sent!')
                window.location.reload(false)
            },
            () => {
                alert('Failed to send message, please try again!')
            }
        )
    }

    return (
        <>
        <div className='container contact-page'> 
        <div className = 'text-zone'>
            <h1>
                <AnimatedLetters 
                letterClass = {letterClass}
                strArray={['C','o','n','t','a','c','t',' ','m','e']}
                idx={15}
                />
            </h1>
            <p>
            vidalfan11@gmail.com
            </p>
            <p>
            +64 021 131 9695
            </p>
            <p>
            Auckland, New Zealand
            </p>
            <div className='contact-form'>
                <form ref = {form} onSubmit={sendEmail}>
                    <ul>
                        <li className='half'>
                            <input placeholder="Name" type="text" name="name"  required />
                        </li>
                        <li className='half'>
                            <input 
                            placeholder="Email" 
                            type="email" 
                            name="email"  
                            required 
                            />
                        </li>
                        <li>
                            <input 
                            placeholder="Subject" 
                            type="text" 
                            name="subject" 
                            required 
                            />
                        </li>
                        <li>
                            <textarea 
                            placeholder='Message' 
                            name="message" 
                            required
                            ></textarea>        
                        </li>
                        <li>
                            <input type ='submit' className='flat-button' value="SEND"/>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
        </div>
        <Loader type="pacman" /> 
        </>
    )
}

export default Contact 