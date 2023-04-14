import './App.css';
import Home from './pages/Home';
import AllMovie from './pages/AllMovie'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/searchmovie' element={<AllMovie />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
