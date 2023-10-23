import React, { useState } from "react";
import { FaBars, FaSignOutAlt, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { notify } from "../Utility/notify";

const Nav = () => {
  const { user, logOut } = useAuth();
  const [show, setShow] = useState(false);

  return (
    <>
      <div>
        <header className="py-4 bg-white  text-gray-900          ">
          <div className="md:flex justify-between items-center md:w-10/12 md:mx-auto hidden">
            <div>
              <Link to="/" className="font-bold text-xl text-[#c801ff] mr-3">
                <span className="uppercase">MobileHub</span>
              </Link>

              <Link
                className="py-2 rounded-lg hover:text-[#c801ff] hover:bg-white px-2 font-semibold text-sm "
                to="/"
              >
                Home
              </Link>

              {user?.uid && (
                <>
                  <Link
                    className="py-2 rounded-lg hover:text-[#c801ff] hover:bg-white px-2 font-semibold text-sm "
                    to="/dashboard/overview"
                  >
                    Dashboard
                  </Link>
                </>
              )}
              <Link
                className="py-2 rounded-lg hover:text-[#c801ff] hover:bg-white px-2 font-semibold text-sm "
                to="/categories"
              >
                All Category
              </Link>
              <Link
                className="py-2 rounded-lg hover:text-[#c801ff] hover:bg-white px-2  font-semibold text-sm"
                to="/blog"
              >
                Blogs
              </Link>
            </div>
            <div className="pt-3">
              {user?.uid ? (
                <div className="flex items-center ">
                  <div>
                    Welcome, <b>{user?.displayName}</b>
                  </div>
                  <span
                    onClick={() => {
                      logOut();
                      notify("Logout Successfully !!!", "error");
                    }}
                    title="Logout"
                    className="  cursor-pointer hover:text-[#c801ff] transition-colors duration-500  text-3xl  px-4 "
                  >
                    <FaSignOutAlt />
                  </span>
                </div>
              ) : (
                <>
                  {" "}
                  <Link
                    className="py-2  border  border-[#c801ff] hover:bg-[#8ac015]  text-sm   px-4 "
                    to="/login"
                  >
                    Login
                  </Link>
                  <Link
                    className="py-2  hover:bg-[#1559c0] bg-[#c801ff] border  border-[#c801ff]  ml-2 text-sm text-white    px-4 "
                    to="/reg"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>

          <div className="flex justify-between md:hidden px-6">
            <div>
              <Link to="/" className="font-bold text-xl text-[#c801ff]  mr-3">
                <span className="uppercase">NextPhone</span>
              </Link>
            </div>
            <div>
              {!show ? (
                <FaBars onClick={() => setShow(!show)} />
              ) : (
                <FaTimes onClick={() => setShow(!show)} />
              )}
            </div>
          </div>
          {show && (
            <>
              <div className="flex flex-col ml-5">
                <Link
                  className="py-2 rounded-lg hover:text-[#c801ff] hover:bg-white px-2 font-semibold text-sm "
                  to="/"
                >
                  Home
                </Link>

                <Link
                  className="py-2 rounded-lg hover:text-[#c801ff] hover:bg-white px-2 font-semibold text-sm "
                  to="/categories"
                >
                  All Category
                </Link>

                {user?.uid && (
                  <>
                    <Link
                      className="py-2 rounded-lg hover:text-[#c801ff] hover:bg-white px-2 font-semibold text-sm "
                      to="/dashboard/overview"
                    >
                      Dashboard
                    </Link>
                  </>
                )}
                <Link
                  className="py-2 rounded-lg hover:text-[#c801ff] hover:bg-white px-2  font-semibold text-sm"
                  to="/blog"
                >
                  Blogs
                </Link>
              </div>
              <div className="pt-3 ml-5">
                {user?.uid ? (
                  <div className="flex items-center ">
                    <span
                      onClick={() => {
                        logOut();
                        notify("Logout Successfully !!!", "error");
                      }}
                      title="Logout"
                      className="  cursor-pointer hover:text-sky-400 transition-colors duration-500  text-3xl  px-4 "
                    >
                      <p data-tip="Logout">
                        {" "}
                        <FaSignOutAlt />
                      </p>
                    </span>
                  </div>
                ) : (
                  <>
                    {" "}
                    <Link
                      className="py-2 rounded-md border   text-sm   px-4 "
                      to="/login"
                    >
                      Login
                    </Link>
                    <Link
                      className="py-2 rounded-md bg-[#c801ff] border  border-[#c801ff]  ml-2 text-sm text-white    px-4 "
                      to="/reg"
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </>
          )}
        </header>
      </div>
    </>
  );
};

export default Nav;
