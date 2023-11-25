

import './App.css'
import Home from './components/Home'
// import Header from './components/header'
import {Link} from 'react-router-dom'
import Projects from './components/Projects'
import Hero from './components/Hero'
import About from './components/About'
function App() {


  return (
    <div  className="bg-cover text-white bg-center h-screen"
    style={{
      backgroundImage: 'url("https://wallpapercave.com/wp/MwWqtVu.jpg")',
    }}>
  
    <Link  path='/'>{Hero}</Link>
    <Link to="/home">{Home} </Link>

    <Link to="/about">{About}</Link>
    
    <Link to="/projects">{Projects}</Link>
  


    

    </div>
  )
}

export default App
