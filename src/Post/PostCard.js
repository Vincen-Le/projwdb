import React from "react";
import "./PostCard.css";
import Comment from "./Comment";
import "./Comment.css";
//Provides formatting and information made in one single post
const PostCard = ({ post }) => {
  console.log(post.published);
  return (
    <div className="main-container">
      <div className="author">{`Posted by ${post.author} ${Math.floor(
        (Date.now() - new Date(post.published).getTime()) / 86400000
      )} days ago`}</div>
      <div className="main-title">{post.title}</div>
      <div className="main-upvotes">{`Upvotes: ${post.upvotes}`}</div>
      <div className="main-downvotes">{`Downvotes: ${post.downvotes}`}</div>
      <div className="main-totalvotes">{`Total: ${
        parseInt(post.upvotes, 10) - parseInt(post.downvotes, 10)
      }`}</div>
      <div className="mainpost-content">{post.content}</div>
      <hr className="divide" />
    </div>
  );
};

export default PostCard;
