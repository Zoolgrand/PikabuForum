import './User.css';
import user from '../../images/avatar.png';
import Forum from '../Forum/Forum';
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
     <Forum/>
    </div>
  );
}
export default User;
