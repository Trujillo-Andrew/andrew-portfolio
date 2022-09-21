import Nav from './Components/Nav.js'
import Portfolio from './Components/Portfolio.js';
import Hero from './Components/Hero.js'
import Clients from './Components/Clients.js'
import Skills from './Components/Skills.js'
import Contact from './Components/Contact.js'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className='bg-black'>
        <div className='bg-black'>
          <Nav/>
          <div>
          <Routes>
            <Route exact path='/' element={<Hero/>}>
            </Route>
            <Route path='/Portfolio' element={<Portfolio/>}></Route>
            <Route path='/Clients' element={<Clients/>}></Route>
            <Route path='/Skills' element={<Skills/>}></Route>
            <Route path='/Contact' element={<Contact/>}></Route>
          </Routes>
            
          </div>
          
        </div>
          
      </div>
    </Router>
  );
}

export default App;
