import React from "react";

function Navbar() {
  return (
    <>
      <div className="navbar text-white border border-l-0 border-r-0 border-b-gray-800">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 bg-slate-950">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Services</a>
              </li>
              <li>
                <a>Why Us</a>
              </li>
              <li>
                <a>OurProcess</a>
              </li>
              <li>
                <a>OurWork</a>
              </li>
              <li>
                <a>FAQs</a>
              </li>
            </ul>
          </div>
          <img src="./hyge-assets/hyge-2023-blue 1.png" alt="Hyge Logo" width={100} style={{paddingLeft: 20, marginLeft: 10}}/>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 bg-slate-800 rounded-3xl">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>Why us</a>
            </li>
            <li>
              <a>OurProcess</a>
            </li>
            <li>
              <a>OurWork</a>
            </li>
            <li>
              <a>FAQs</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-[#5459684D] border-none rounded-3xl text-[#F5F5FF] mr-10">Let's talk</a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
