import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

function Layout() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const loggedIn = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(loggedIn);

    const protectedPaths = ["/notes", "/saved"];
    if (!loggedIn && protectedPaths.includes(location.pathname)) {
      navigate("/login");
    }
  }, [location.pathname, navigate]);

  return (
    <div className="min-h-screen overflow-y-scroll hide-scrollbar">
      <Navbar
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
      <Outlet />
    </div>
  );
}

export default Layout;
