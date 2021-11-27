import { Component } from "react";
import './Posts.css'

export default class Posts extends Component {
  state = {
    posts: [],
  };

  getPosts = () => {
    const url = `https://jsonplaceholder.typicode.com/posts`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ posts: data }))
      .catch((err) => {
        console.error(err);
      });
  };

  render() {
    return (
      <div>
        <h1>Posts</h1>
        <button onClick={this.getPosts}>Get Posts From jsonplaceholder</button>
        <section>
          {this.state.posts.map((post, i) => (
            <p className="posts" key={i}>{post.title}</p>
          ))}
        </section>
      </div>
    );
  }
}
