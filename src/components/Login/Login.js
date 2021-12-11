import logo from "../../images/logo.png";
import "./Login.css";
function Login() {
  return (
    <div className="login-bg">
      <div className="login-wrap">
        <div className="title">
          <img src={logo} alt="logo" className="logo"></img>
          <h1 className="site-name">Pikabu</h1>
        </div>
        <div className="form">
          <div className="form-input">
            <input type="email" className="input" placeholder="E-mail"></input>
            <input
              type="password"
              className="input"
              placeholder="Password"
            ></input>
          </div>
          <div className="form-buttons">
            <button className="button" type="button">
              Login
            </button>
            <button className="button" type="button">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
