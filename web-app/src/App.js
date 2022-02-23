
import './App.css';
import LoginPage from './Pages/LoginPage/LoginPage';
import Registration from './Pages/RegisterPage/Registration';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Registration/>}/>
          <Route path='/Login' element={<LoginPage/>}/>
        </Routes>
      </Router>
   
      </div>
  );
}

export default App;
