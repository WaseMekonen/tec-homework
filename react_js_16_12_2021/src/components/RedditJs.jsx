import React, { useEffect, useState } from "react";

const RedditJs = ({ topic }) => {
  const [posts, setposts] = useState([]);

  const getPosts = () => {
    const URL = `https://www.reddit.com/r/${topic}.json`;
    fetch(URL)
      .then((response) => response.json())
      .then((response) => {
        let PostArr = response.data.children;
        setposts(PostArr);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(getPosts);

  const postElement = posts.map((post, index) => {
    return <li key={index}>{post.data.title}</li>;
  });

  return (
    <div>
      <h1>Reddit-JS Posts</h1>
      <ul>{postElement}</ul>
    </div>
  );
};

export default RedditJs;
