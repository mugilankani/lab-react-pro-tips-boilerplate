import './App.css'
import { Routes, Route , Link } from 'react-router-dom'
import Home from './Component/Home'
import Form from './Component/Form'
import Contect from './Component/Contect'
import logo from "/Kal.png"

function App() {
  

  return (
    <div className='background'>
      <div className='navBar'>
        <div className='imgDiv'>
          <Link to="/"><img src={logo} alt=""  /></Link>
        </div>
        <div className='textDiv'>
          <div><Link style={{color: "white"}} to="/contect">Contect</Link></div>
          <div><Link style={{color: "white"}} to="/form">Form</Link></div>
        </div>
      </div>
      <Routes>
        <Route path='/' element={< Home />} />
        <Route path='/form' element={< Form />} />
        <Route path='/contect' element={< Contect />} />
      </Routes>
    </div>

  )
}

export default App
