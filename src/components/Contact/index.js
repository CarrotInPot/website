import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

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
            Please do not hesitate to contact me if
            you have any opportunities or questions.
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
        <div className='info-map'>
            Samuel Meads,
            <br />
            Auckland, New Zealand
            <br />
            +64 021 131 9695
            <br />
            <br/>
            <span>vidalfan11@gmail.com</span> 
        </div>
        <div className='map-wrap'>
            <MapContainer center ={[-36.8996897, 174.8821005]} zoom={13}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position = {[-36.8996897, 174.8821005]}>
                    <Popup> I live around here! </Popup>
                </Marker>
            </MapContainer>
        </div>
        </div>
        <Loader type="pacman" /> 
        </>
    )
}

export default Contact 