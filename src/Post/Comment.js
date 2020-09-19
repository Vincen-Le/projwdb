import React from "react";
import "./Comment.css";
/**
 * Create comment container that maps each posts
 * comments into its own individual containers
 */
const Comment = ({ post }) => {
  return (
    <div>
      {post.comments.map((comment) => {
        return (
          <div className="comment">
            <div className="commentor">{comment.author}</div>
            <div className="comment-content">{comment.content}</div>
            <div>
              <div className="comment-up">{`+${comment.upvotes}`}</div>
              <div className="comment-down">{`-${comment.downvotes}`}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Comment;
