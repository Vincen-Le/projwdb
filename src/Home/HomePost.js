import { Link } from "@material-ui/core";
import React from "react";
import "./HomePost.css";
//Formats and displays information from each post in organized containers to be seen on the home page
const HomePost = ({ post }) => {
  return (
    <div className="post-container">
      <div className="posted-by">{`Posted by ${post.author} ${Math.floor(
        (Date.now() - new Date(post.published).getTime()) / 86400000
      )} days ago`}</div>
      <div className="post-title">
        {post.title.length > 36
          ? `${post.title.substring(0, 36)}...`
          : post.title}
      </div>
      <div className="post-content">
        {post.content.length > 210
          ? `${post.content.substring(0, 210)}...`
          : post.content}
      </div>
      <div className="upvotes">{`Upvotes: ${post.upvotes}`}</div>
      <div className="downvotes">{`Downvotes: ${post.downvotes}`}</div>
      <div className="totalvotes">{`Total: ${
        parseInt(post.upvotes, 10) - parseInt(post.downvotes, 10)
      }`}</div>
    </div>
  );
};

export default HomePost;
