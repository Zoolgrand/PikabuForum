import user from "../../images/user.svg";
import upvote from "../../images/upvote.svg";
import downvote from "../../images/downvote.svg";
import "./Post.css";
function Post() {
  return (
    <div className="post">
      <div className="post-header">
        <div className="post-header-left">
          <div className="rating">
            <img className="upvote" src={upvote} alt="upvote"></img>
            <h5 className="post-rating">300</h5>
            <img className="downvote" src={downvote} alt="downvote"></img>
          </div>
          <div className="post-info">
            <div className="user">
              <img className="user-avatar" src={user} alt="avatar"></img>
              <h4 className="nickname">Nickname</h4>
            </div>
            <h2 className="post-title">Title1</h2>
          </div>
        </div>
        <div className="post-header-right">
          <h5>3 hours ago</h5>
        </div>
      </div>
      <div className="post-body">
        <h3>
          Иногда для достижения целей приходится идти на разумные жертвы. Что
          если на этот раз кто-то решил пожертвовать мной?
        </h3>
      </div>
    </div>
  );
}
export default Post;
