import React from "react";
import "./Comment.css";

const Comment = ({ post }) => {
  return (
    <div>
      {post.map((comment) => {
        return (
          <div className="comment">
            <div className="commentor">{comment.author}</div>
            <div className="comment-content">{comment.content}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Comment;
