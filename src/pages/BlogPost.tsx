import { useParams } from "react-router-dom";
import { posts } from "../lib/posts";
import type { BlogPost as BlogPostType } from "../types";


const BlogPost = () => {
    const { slug } = useParams<{ slug: string}>(); // Get slug from URL

    // Find the post with the matching slug
    const post: BlogPostType | undefined = posts.find((p) => p.slug === slug);

    if(!post) {
        // Show this if no post is found
        return <p>Post not found</p>;
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
};

export default BlogPost;