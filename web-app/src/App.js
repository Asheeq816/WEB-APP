
import './App.css';
import LoginPage from './Pages/LoginPage/LoginPage';
import Registration from './Pages/RegisterPage/Registration';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './Pages/Home/HomePage';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Registration/>}/>
          <Route path='/Login' element={<LoginPage/>}/>
          <Route path='/Home' element={<HomePage/>}/>
        </Routes>
      </Router>
      </div>
  );
}

export default App;
