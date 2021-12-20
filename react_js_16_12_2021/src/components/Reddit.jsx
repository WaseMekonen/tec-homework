import React, { useEffect, useState } from "react";

const Reddit = () => {
  const [posts, setPosts] = useState([]);

  useEffect(getPostFromReddit, []);


  function getPostFromReddit ()  {
    const URL = "https://www.reddit.com/r/reactjs.json";
    fetch(URL)
      .then((response) => response.json())
      .then((response) => {
        // console.log(response.data.children);
        const redditReactPosts = response.data.children;
        setPosts(redditReactPosts);
      })
      .catch((err) => {
        console.error(err);
      });
  };


  const elements = posts.map((post,index) => {
    return <li key={index}>{post.data.title}</li>;
  });

  return (
    <div>
      <h1>Reddit</h1>
      <h3>React-Js Posts</h3>
      <ol>{elements}</ol>
    </div>
  );
};

export default Reddit;
