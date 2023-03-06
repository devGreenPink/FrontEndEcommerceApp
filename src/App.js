
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} exact></Route>
        <Route path='/login' element={<Login/>} ></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
    </Router>
    
  );
}



export default App;
