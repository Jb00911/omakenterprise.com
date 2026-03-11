import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../sanityClient";
import { PortableText } from "@portabletext/react";

function BlogPost() {

  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {

    client.fetch(
      `*[_type == "post" && slug.current == $slug][0]{
        title,
        publishedAt,
        body
      }`,
      { slug }
    )
    .then(data => setPost(data));

  }, [slug]);

  if (!post) return <div>Loading...</div>;

  return (

    <div className="blog-article">

      <h1 className="article-title">
        {post.title}
      </h1>

      <p className="article-date">
        {new Date(post.publishedAt).toDateString()}
      </p>

      <div className="article-content">
        <PortableText value={post.body}/>
    </div>

</div>

  );
}

export default BlogPost;


