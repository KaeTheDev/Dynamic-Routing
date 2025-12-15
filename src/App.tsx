import BlogIndex from "./pages/BlogIndex";
import BlogPost from "./pages/BlogPost";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Navigate to="/blog" replace />} />
      <Route path="/blog" element={<BlogIndex />}/>
      <Route path="/blog/:slug" element={<BlogPost />} />
    </Routes>
  );
}

export default App;
