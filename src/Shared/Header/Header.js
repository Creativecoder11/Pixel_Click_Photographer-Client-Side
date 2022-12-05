import React, { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../../Assets/Logo/logo-w.png";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then(()=>{})
    .catch(err => console.log(err))

  }

  const menuItems = (
    <li>
      <Link to="/" className="mx-3">
        Home
      </Link>

      <Link to="/blog" className="mx-3">
        Blog
      </Link>

      <Link to="/services" className="mx-3">
        Services
      </Link>
      {/* conditional redering */}
      {user?.email ? (
        <>
          <Link to="/myreviews" className="mx-3">
            My Reviews
          </Link>

          <Link to="/addServices" className="mx-3">
            Add Services
          </Link>
        </>
      ) : (
        <></>
      )}
    </li>
  );

  return (
    <div>
      <div className="navbar bg-black text-white">
        <div className="navbar-start ml-0 lg:ml-10">
          <div className="dropdown bg-black">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <img src={Logo} alt="" w />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {menuItems}
          </ul>
        </div>
        <div className="navbar-end mr-0 lg:mr-10">
          <Link>
            {user?.uid ? (
              <>
                <Link
                  className="btn-header bg-light p-2 lg:ms-0 text-dark rounded cursor ms-4"
                  onClick={handleLogOut}
                >
                  Log Out
                </Link>
              </>
            ) : (
              <>
                <Link
                  className="btn-header p-2 text-dark rounded cursor ms-4"
                  to={"/login"}
                >
                  Login
                </Link>
                <Link
                  className="btn-header p-2 text-dark rounded cursor"
                  to={"/register"}
                >
                  Register
                </Link>
              </>
            )}
          </Link>

          <Link>
            {user?.photoURL ? (
              <div className="avatar online">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} alt="" />
                </div>
              </div>
            ) : (
              <div className="avatar placeholder">
                <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
                  <span className="text">user</span>
                </div>
              </div> 
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
