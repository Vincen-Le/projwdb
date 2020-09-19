import React, { Component } from "react";
import HomePost from "./HomePost";
import data from "../Data.json";
import "./Home.css";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
//Fills multiple cards with information from each post and allows user to click on each post to be redirected to see post's comments
export default class Home extends Component {
  state = {
    posts: data.posts,
  };
  render() {
    return (
      <div>
        {this.state.posts.map((post) => {
          return (
            <div style={{ paddingBottom: "30px" }}>
              <Link to={`/posts/${post.id}`}>
                <HomePost post={post} />
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}
