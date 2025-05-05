import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AppContext from "../context/AppContext";
import { assets } from "../assets/assets";

const Navbar = () => {
  const { loginUser, navigate, setloginUser } = useContext(AppContext);
  const [open, setOpen] = React.useState(false);

  const onHandleLogout = () => {
    navigate("/");
    setloginUser(null);
    localStorage.removeItem("loginUser");
  };
  return (
    <>
      {loginUser && (
        <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all ">
          <NavLink to="/dashboard">
            <img
              className="h-10 w-10 rounded-2xl"
              src={assets.logo}
              alt="logo"
            />
          </NavLink>
          {/* Desktop Menu */}
          <div className="flex items-center gap-8">
            {loginUser ? (
              <div className="group relative">
                <img
                  className="h-10 w-10"
                  src={assets.profile_icon}
                  alt="profile icons"
                />
                <div className="group hidden group-hover:block absolute top-10 right-0 bg-white shadow border border-gray-200 py-2.5 w-30 rounded-[10px] z-40">
                  <p
                    onClick={onHandleLogout}
                    className=" p-1.5 pl-3 cursor-pointer hover:bg-indigo-300/40"
                  >
                    Logout
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
