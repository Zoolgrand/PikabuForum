import './SideBar.css';
import user from '../../images/user.svg';
function SideBar({ isActive, setIsActive }) {
  
  function AddPostHandler() {
    setIsActive(true);
  }

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <div className="wrap-for-border">
          <div className="user-sidebar">
            <img className="user-sidebar-avatar" alt="user" src={user}></img>
            <div></div>
            <h2>User</h2>
          </div>
          <h2>Rating:3000</h2>
        </div>
        <div className="sidebar-logout">
          <button className="sidebar-button-logout" type="button">
            Logout
          </button>
        </div>
      </div>
      <div className="sidebar-midle">
        <h1>Votes</h1>
        <h1>Saved</h1>
        <h1>Ban-list</h1>
      </div>
      <div className="sidebar-bot">
        <button
          className="add-post-button"
          type="button"
          onClick={AddPostHandler}
        >
          Add Post
        </button>
      </div>
    </div>
  );
}
export default SideBar;
