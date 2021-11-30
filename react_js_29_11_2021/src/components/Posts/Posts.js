import { Component } from "react";
import "./Posts.css";

export default class Posts extends Component {
  state = {
    posts: [],
    postEdit: { title: "" },
    titleEdit : ""
  };

  componentDidMount() {
    console.log("ready");
    this.getPosts();
  }

  getPosts = () => {
    const URL = "https://jsonplaceholder.typicode.com/posts";
    fetch(URL)
      .then((res) => res.json())
      .then((response) => {
        const shortPostsArr = response;
        shortPostsArr.splice(5);
        this.setState({ posts: shortPostsArr });
        console.log(response);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  delete = (i) => {
    const newArr = this.state.posts;
    newArr.splice(i, 1);
    this.setState({ posts: newArr });
  };

  edit = (item) => {
    this.setState({postEdit:this.state.posts})
    this.setState({titleEdit:item.title})
    
  };

  update = ()=>{
      let post = this.state.posts.find(item=> item.id !== this.state.posts.id )
      post.tite = this.state.postEdit.title
      this.setState({posts:post})
    
  }

  render() {
    console.log(this.state.posts);
    const { posts } = this.state;
    return (
        
      <div>
          <div>
              <label>Title  </label>
              <input type="text" value={this.state.titleEdit} />
              <button onClick={this.update}>Update</button>
          </div>
        <h1>Posts From Jsonplaceholder</h1>

        <table className="postsTable">
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Edit</th>
          </tr>
          {posts.map((post, i) => {
            return (
              <tr key={i}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>
                  <button
                    onClick={() => {
                      this.delete(i);
                    }}
                  >
                    Delete
                  </button>
                  <button onClick={()=>{
                        this.edit(post)
                  }}>Edit</button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
      
    );
  }
}
