import React, { Component } from "react";
import data from "../Data.json";
import PostCard from "./PostCard";
import Comment from "./Comment";

export default class Post extends Component {
  state = {
    post: data.posts.find(
      (post) => post.id === parseInt(this.props.match.params.id, 10)
    ),
  };

  render() {
    console.log(this.state.post);
    return (
      <div>
        <PostCard post={this.state.post}>
          <Comment post={this.state.post} />
        </PostCard>
      </div>
    );
  }
}
