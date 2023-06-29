import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />} >
      <Route path ='/website/' element={<Home/>} /> 
      <Route path='website/about' element ={<About />} /> 
      <Route path='website/contact' element ={<Contact />} />
      <Route path='website/portfolio' element ={<Portfolio />} /> 
      </Route> 
    </Routes>
    </>
  )
}

export default App;
