import About from './components/About'
import Home from './pages/Home'
import Project from './components/Project'
import { Routes, Route } from 'react-router-dom'
import Contact from './components/Contact'

function App() {
  return (
    <Routes>
      <Route 
        path="/"
        element={<Home />}
      />
      <Route 
        path="About"
        element={<About />}
      />
      <Route 
        path="Project"
        element={<Project />}
      />
      <Route 
        path="Contact"
        element={<Contact />}
      />
    </Routes>
  )
}

export default App
