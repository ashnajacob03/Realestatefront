import React from 'react' 
import Home from './Pages/Home'
import List from './Pages/List'
import Plot from './Pages/Plot'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom'
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/List" element={<List />} />
        <Route path="/Plot" element={<Plot />} />
      </Routes>
    </Router>
    
    </>
  )
}

export default App
