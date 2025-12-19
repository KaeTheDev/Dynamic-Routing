# React Lab – Dynamic Blog with Protected Routes

##  Overview
This lab focuses on building a small but feature-rich blog application using React Router. The project emphasizes dynamic routing, route parameters, basic client-side authentication, and protected routes—core concepts used in modern single-page applications.

##  Workplace Context
In real-world applications, developers frequently need to generate pages dynamically from data and restrict access to certain areas based on authentication status. This lab simulates a common production scenario: a public-facing blog with an admin dashboard accessible only to logged-in users.

##  Learning Objectives
Upon successful completion of this lab, you will be able to:

* Implement dynamic routes using React Router.
* Create an index page that links to dynamically generated detail pages.
* Read and use URL parameters (slugs or IDs) to fetch and display data.
* Structure a basic authentication system using React Context.
* Create protected routes that redirect unauthenticated users.
* Conditionally render UI based on authentication state.
* (Bonus) Implement simple animated page transitions.

##  Description

This lab focuses on:

* Creating a blog index page that lists all posts.
* Implementing dynamic routes for individual blog posts.
* Managing authentication state using React Context.
* Protecting routes from unauthorized access.
* Conditionally rendering navigation elements based on login state.
* (Bonus) Adding animated transitions between pages.

### Mock Blog Data
* Blog posts are stored in an in-memory array (e.g., `lib/posts.ts`).
* Each post includes:
  * `id`
  * `slug`
  * `title`
  * `content`

### Public Blog Pages
**Blog Index Page (`/blog`):**
* Displays a list of all blog posts.
* Each post links to its dynamic route using its slug.

**Dynamic Blog Post Page (`/blog/:slug`):**
* Uses the slug from the URL to fetch and display a specific post.
* Displays a “Post not found” message if no matching post exists.

---

### Authentication System (AuthContext)
**Auth Context provides:**
* `isAuthenticated` — boolean login state
* `login()` — simulates logging in
* `logout()` — simulates logging out

**Login Page (`/login`):**
* Simple page with a “Log In” button.

**Navbar/Header:**
* Shows “Log In” when logged out.
* Shows “Log Out” and “Admin” link when logged in.

No real authentication is required—state is managed entirely with Context.

---

### Protected Admin Route
**Admin Page (`/admin`):**
* Accessible only to authenticated users.
* Unauthenticated users are redirected to `/login`.
* Displays a simple dashboard message.

---

### (Bonus) Page Transitions
* Optional animated transitions between pages.
* Libraries such as `framer-motion` and `AnimatePresence` can be used to implement fade-in/fade-out effects.

---

##  Resources

*  React Docs — https://react.dev
*  TypeScript Handbook — https://www.typescriptlang.org/docs
*  React Hooks Guide — Official Documentation
*  TypeScript + React Cheatsheets (recommended)


##  Getting Started

##  Requirements

*  Node.js v24+
*  npm
*  Git
*  A code editor (VS Code recommended)
*  TypeScript
*  React

##  OS Compatibility

This lab works on:

*  Windows
*  macOS
*  Linux

##  Installation

1. Clone the repository:

git clone [<repository-url>](https://github.com/KaeTheDev/Dynamic-Routing.git)

2. Navigate into the project folder:

cd dynamic-routing

##  Setup

1. Install dependencies:

npm install

2. Run the project:

npm run dev

##  Project Structure

* components/ — Reusable UI components (Navbar, ProtectedRoute, etc.).
* pages/ — Page-level components (Blog, Post, Login, Admin).
* contexts/ — Authentication context and provider.
* lib/ — Mock blog data.
* types/ — Shared TypeScript interfaces.
* utils/ — Helper utilities.