import user from "../../images/user.svg";
import upvote from "../../images/upvote.svg";
import downvote from "../../images/downvote.svg";
import "./Post.css";
function Post(props) {
  return (<div className="post-wrap">
    <div className="post">
      <div className="post-header">
        <div className="post-header-left">
          <div className="rating">
            <img className="upvote" src={upvote} alt="upvote"></img>
            <h5 className="post-rating">{props.upvotes-props.downvotes}</h5>
            <img className="downvote" src={downvote} alt="downvote"></img>
          </div>
          <div className="post-info">
            <div className="user">
              <img className="user-avatar" src={user} alt="avatar"></img>
              <h4 className="nickname">{props.user}</h4>
            </div>
            <h2 className="post-title">{props.title}</h2>
          </div>
        </div>
        <div className="post-header-right">
          <h5>3 hours ago</h5>
        </div>
      </div>
      <div className="post-body">
        <h3>
       {props.body}
        </h3>
      </div>

       


    </div>

     <div className="tags">
     <p className="tag">Кот</p>
     <p className="tag">Политика</p>
     <p className="tag">Текст</p>
   </div>

   </div>
  );
}
export default Post;
