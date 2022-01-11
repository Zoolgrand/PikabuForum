import { initializeApp } from 'firebase/app';
import LoginPage from './pages/LoginPage/LoginPage';
import MainPage from './pages/MainPage';
import UserPage from './pages/UserPage';
import PageNotFound from './pages/PageNotFound';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../src/store/slices/userSlice';

function App() {
  const dispatch = useDispatch();

  const firebaseConfig = {
    apiKey: 'AIzaSyBfwLR9C1FhKiFA3dk-PpD-r5zS1QKzlvc',
    authDomain: 'pikabu-forum.firebaseapp.com',
    projectId: 'pikabu-forum',
    storageBucket: 'pikabu-forum.appspot.com',
    messagingSenderId: '528866479258',
    appId: '1:528866479258:web:d6d140ad315e2431f72323',
  };
  const app = initializeApp(firebaseConfig);

  //check if user exist in local storage
  useEffect(() => {
    let localUserEmail = localStorage.getItem('email');
    let localUserID = localStorage.getItem('uid');
    let localUserToken = localStorage.getItem('token');
    if (localUserID) {
      dispatch(
        setUser({
          email: localUserEmail,
          id: localUserID,
          token: localUserToken,
        })
      );
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
