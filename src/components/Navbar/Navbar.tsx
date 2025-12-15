import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

const Navbar = () => {
    const auth = useContext(AuthContext);

    if(!auth) return null;

    return (
        <header className="p-4 bg-gray-200 flex justify-between items-center">
            <h1 className="font-bold">My Blog</h1>

            <nav className="flex gap-4">
        {auth.isAuthenticated ? (
          <>
            <Link to="/admin" className="text-blue-600">
              Admin
            </Link>
            <button
              onClick={auth.logout}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Log Out
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="bg-green-500 text-white px-3 py-1 rounded"
          >
            Log In
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Navbar;