import './SideBar.css';
import user from '../../images/user.svg';
import { useDispatch } from 'react-redux';
import { removeUser } from '../../store/slices/userSlice';
import { useNavigate } from 'react-router-dom';

function SideBar({ isActive, setIsActive }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function AddPostHandler() {
    setIsActive(true);
  }

  function logoutHandler() {
    localStorage.clear();
    dispatch(removeUser());
    navigate('/login');
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
          <button
            className="sidebar-button-logout"
            type="button"
            onClick={logoutHandler}
          >
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
