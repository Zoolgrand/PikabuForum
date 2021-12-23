import './User.css';
import Post from '../Post/Post';
import user from '../../images/avatar.png';
function User() {
  return (
    <div className="wrap">
      <div className="user-top">
        <img className="avatar" src={user}></img>
        <h1 className="user-page-nickname">Nickname</h1>
      </div>
      <div className="user-bot">
        <h3 className="user-info">Posts 5</h3>
        <h3 className="user-info">Reputation 100</h3>
      </div>
      <Post />
      <Post />
      <Post />
    </div>
  );
}
export default User;
