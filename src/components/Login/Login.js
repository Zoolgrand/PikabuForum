import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import logo from '../../images/logo.png';
import './Login.css';

function Login() {
  
  const  navigate  = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleLogin = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, pass)
      .then(({ user }) => {
        console.log(user);

        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );

        localStorage.setItem('email', user.email)
        localStorage.setItem('uid', user.uid)
        localStorage.setItem('token', user.accessToken)

        navigate('/');
      })
      .catch((e) => console.log('wrong credential '));
  };

  const handleSignUp = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, pass)
      .then(({ user }) => {
        console.log(user);

        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );

        localStorage.setItem('email', user.email)
        localStorage.setItem('uid', user.uid)
        localStorage.setItem('token', user.accessToken)

        navigate('/');
      })
      .catch((e) => console.log('already exist'));
  };

  return (
    <div className="login-bg">
      <div className="login-wrap">
        <div className="title">
          <img src={logo} alt="logo" className="logo"></img>
          <h1 className="site-name">Pikabu</h1>
        </div>
        <div className="form">
          <div className="form-input">
            <input
              type="email"
              className="input"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              type="password"
              className="input"
              placeholder="Password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            ></input>
          </div>
          <div className="form-buttons">
            <button className="button" type="button" onClick={handleLogin}>
              Login
            </button>
            <button className="button" type="button" onClick={handleSignUp}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
