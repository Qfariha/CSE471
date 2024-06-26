import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import useAdmin from "../../hooks/useAdmin";
import LogoutButton from "../sidebar/LogoutButton";

const Navbar = () => {
  const { authUser } = useAuthContext();

  const [admin] = useAdmin(authUser); // useAdmin hook

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-3xl font-mono text-red-500">
          <Link to="/">ANIME 471!!</Link>
        </a>
      </div>
      <div className="flex-none gap-2">
        <div>
          <a className="btn btn-ghost text-xl font-mono">
            <Link to="/store">Store</Link>
          </a>
        </div>
        <div>
          <a className="btn btn-ghost text-xl font-mono">
            <Link to="/store/cart">Cart</Link>
          </a>
        </div>
        <div>
          <a className="btn btn-ghost text-xl font-mono">
            <Link to="/store/wishlist">Wishlist</Link>
          </a>
        </div>

        {/* if logged user admin then able to access Dashboard */}
        {admin && (
          <div>
            <a className="btn btn-ghost text-xl font-mono">
              <Link to="/dashboard">Dashboard</Link>
            </a>
          </div>
        )}

        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src={authUser.profilePic}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <Link to="/chat">Chat</Link>
            </li>
            <li>
              <Link to="/store">Store</Link>
            </li>
            <li>
              <Link to="/store/cart">Cart</Link>
            </li>
            <li>
              <LogoutButton />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
