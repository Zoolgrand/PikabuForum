import "./Navbar.css";
import logo from "../../images/logo.png";
import user from "../../images/user.svg";
import search from "../../images/search.svg";
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbarleft">
        <img src={logo} alt="logo" className="logo" />
        <h1>Pikabu</h1>
        <h1>Best</h1>
        <h1>New</h1>
      </div>
      <div className="navbarright">
        <div className="search-box">
          <input type="text" className="search-txt" placeholder="Search"></input>
          <img src={search} alt="search" className="search-btn" />
        </div>
        <img src={user} alt="user" className="user" />
      </div>
    </div>
  );
}
export default Navbar;
