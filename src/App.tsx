import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './Paginas/Home/Home'
import './App.css'

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Teste" element={<h1>Teste</h1>}/>
      </Routes>
    </Router>
  );
}

export default App
