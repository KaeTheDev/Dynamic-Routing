import type { BlogPost } from "../types"

export const posts: BlogPost[] = [
    {
        id: 1,
        slug: "my-first-post",
        title: "My First Post",
        content: "Welcome to my first blog post! This is where I share my thoughts."
    },
    {
        id: 2,
        slug: "learning-react-router",
        title: "Learning React Router",
        content: "Today, I learned how to use React Router to create dynamic routes."
      },
      {
        id: 3,
        slug: "why-typescript",
        title: "Why TypeScript is Awesome",
        content: "TypeScript helps catch errors early and makes code easier to maintain."
      }
]