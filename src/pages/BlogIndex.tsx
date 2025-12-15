import { Link } from "react-router-dom";
import { posts } from "../lib/posts";

const BlogIndex = () => {
  return (
    <>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li className="text-black hover:text-red-600" key={post.id}>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default BlogIndex;