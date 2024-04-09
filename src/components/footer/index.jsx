import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";

function Footer() {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-5xl gap-5 py-20 bg-black text-center">
        <h1 className="text-white font-semibold">
          We can help to improve your business
        </h1>
        <h1 className="text-sky-400 font-semibold">
          by upgrading your technology
        </h1>
        <h3 className="text-lg text-white py-5">
          Schedule a free 30 mins call with us
        </h3>
        <button className="btn btn-primary rounded-3xl mb-10">
          Book an appointment
        </button>
      </div>
      <footer className="footer p-10 bg-black text-base-content text-white border-t border-gray-800">
        <nav>
          <img src="./hyge-assets/hyge-2023-blue 1.png" alt="Logo" className="hidden lg:block"/>
          <p className="py-5">
            Hyge is a singapore based company that <br /> provides customisation
            and specialisation <br /> in website design, development, as well as{" "}
            <br />
            mobile app development
          </p>
          <div className="flex flex-row gap-5 py-5">
            <IoLocationSharp style={{ color: "gray" }} size={20} />
            <h1>North Point Bizhub, Singapore</h1>
          </div>
        </nav>
        <nav>
          <h6 className="">Email Us:</h6>
          <p>michael@hygeworks.com</p>
          <h6 className="mt-5">Contact Us:</h6>
          <p>+65 8533 3575</p>
        </nav>
        <nav>
          <div className="collapse bg-black">
            <div className="bg-black">
              <div className="collapse-title text-xl font-medium flex flex-row justify-between">
                LinkedIn
                <MdArrowOutward />
              </div>
              <div className="divider bg-white h-[1px]"></div>
            </div>
          </div>
          <div className="bg-black">
            <div className="collapse-title text-xl font-medium flex flex-row gap-20 justify-between">
              Instagram
              <MdArrowOutward />
            </div>
            <div className="divider bg-white h-[1px]"></div>
          </div>
          <div className="collapse bg-black">
            <div className="bg-black">
              <div className="collapse-title text-xl font-medium flex flex-row gap-20 justify-between">
                Behance
                <MdArrowOutward />
              </div>
            </div>
          </div>
        </nav>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-black text-base-content border-gray-800 text-white">
        <aside className="items-center grid-flow-col">
          <p className="text-xs text-gray-600">Copyright © 2023 Hyge.Pte.Ltd</p>
        </aside>
        <nav className=" md:justify-self-end">
          <p className="text-xs text-gray-600">All Rights Reserved</p>
        </nav>
      </footer>
    </>
  );
}

export default Footer;
