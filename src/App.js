
import { initializeApp } from "firebase/app";
import LoginPage from './pages/LoginPage/LoginPage'
import MainPage from './pages/MainPage'
import UserPage from './pages/UserPage';
import PageNotFound from './pages/PageNotFound';
import {Routes, Route} from 'react-router-dom'


function App() {

const firebaseConfig = {
  apiKey: "AIzaSyBfwLR9C1FhKiFA3dk-PpD-r5zS1QKzlvc",
  authDomain: "pikabu-forum.firebaseapp.com",
  projectId: "pikabu-forum",
  storageBucket: "pikabu-forum.appspot.com",
  messagingSenderId: "528866479258",
  appId: "1:528866479258:web:d6d140ad315e2431f72323"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

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
