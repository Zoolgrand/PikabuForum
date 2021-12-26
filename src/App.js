import { useState } from 'react';
import LoginPage from './pages/LoginPage/LoginPage'
import MainPage from './pages/MainPage'
import UserPage from './pages/UserPage';
import PageNotFound from './pages/PageNotFound';
import {Routes, Route} from 'react-router-dom'

function App() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="App">
      <Routes>
          <Route path='/' element ={<MainPage/>} />
          <Route path='/login' element ={<LoginPage/>} />
          <Route path='/user' element ={<UserPage/>} />
          <Route path='*' element ={<PageNotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
