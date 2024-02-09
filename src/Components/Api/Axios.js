import React, { useState, useEffect } from "react";
import axios from "axios";

const Axios = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
        console.log(posts, "posts");
      })

      .catch((error) => {
        console.log(error);
      });
  }, [setPosts]);

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default Axios;
