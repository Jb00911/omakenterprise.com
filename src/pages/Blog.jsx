import { useEffect, useState } from "react";
import { client } from "../sanityClient";
import { Link } from "react-router-dom";

function Blog() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client.fetch(`*[_type == "post"]{
      _id,
      title,
      slug,
      publishedAt
    }`)
    .then(data => setPosts(data));
  }, []);

  return (
    <div className="blog-page">

      <h1 className="blog-heading">
        Insights & Articles
      </h1>

      <div className="blog-grid">

        {posts.map(post => (

          <div key={post._id} className="blog-card">

            <h2 className="blog-card-title">
              {post.title}
            </h2>

            <p className="blog-date">
              {new Date(post.publishedAt).toDateString()}
            </p>

            <Link
              className="blog-readmore"
              to={`/blog/${post.slug.current}`}
            >
              Read Article →
            </Link>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Blog;