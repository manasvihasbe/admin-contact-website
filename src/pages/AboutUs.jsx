import React, { useState, useEffect } from "react";
import axios from "axios";

function AboutUs() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1 className="page-heading">About Us</h1>
      <div className="About">
        {posts.slice(0, 7).map((post) => (
          <div className="col-md-3 mb-3" key={post.id}>
            <div className="about-card">
              <div className="card-container">
                <h3>
                  <b>{post.title}</b>
                </h3>
                <p>{post.body}</p>
              </div>
            </div>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
