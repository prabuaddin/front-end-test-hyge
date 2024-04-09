import React from "react";
import { MdArrowBack } from "react-icons/md";
import Link from 'next/link'

function DetailPage() {
  return (
    <>
      <div className="flex flex-col p-5 lg:pl-52">
        <Link href='/'>
        <div className="text-white flex flex-row justify-start items-center gap-5 pt-10 pb-10">
          <MdArrowBack />
          <h2>Go Back</h2>
        </div>
        </Link>
        <div className="pb-10">
          <img src="./hyge-assets/Frame 341.png" alt="" />
        </div>
        <div className="flex flex-row justify-start items-center gap-10 pb-10">
          <h1 className="text-xl font-semibold text-white">Our Role</h1>
          <ul className="menu menu-horizontal gap-3">
            <li>
              <button className="btn bg-slate-800 border-sky-400 text-sky-400 rounded-3xl">
                Web Development
              </button>
            </li>
            <li>
              <button className="btn bg-slate-800 border-sky-400 text-sky-400 rounded-3xl">
                UIDesign
              </button>
            </li>
          </ul>
        </div>
        <div className="text-white py-10">
          <h1 className="font-semibold text-5xl py-5">Levare Decanter</h1>
          <p>
            Through Levare website, we aim to share the joy of authentic wine
            enjoyment by offering innovative products that enhance the <br />
            tasting experience, provide valuable resources and knowledge, and
            foster a vibrant community of wine lovers.
          </p>
        </div>
        <div className="pb-10">
          <h1 className="text-white text-2xl py-10">Tech Stack</h1>
          <img src="./hyge-assets/Frame 342.png" alt="" />
        </div>
        <div className="pb-10">
          <button className="btn btn-primary rounded-3xl">Visit Site</button>
        </div>
        <div className="divider bg-slate-800 h-1 lg:w-[970px]"></div>
        <div className="text-white pb-10">
          <h1 className="text-2xl py-10">Description</h1>
          <p>
            Levare Decanter is a revolutionary wine accessory designed to
            enhance your wine tasting experience by providing optimal
            <br />
            aeration for your favorite wines. Crafted with precision and
            innovation, the Levare Decanter is the result of unwavering
            <br />
            commitment to bringing out the true flavors, aromas, and bouquets of
            wines.{" "}
          </p>
        </div>
        <div className="text-white pb-10">
          <h1 className="text-2xl py-10">A sneak peek</h1>
          <p className="pb-10">
            Here’s a sneak peek of what we do with Levare:{" "}
          </p>
          <img src="./hyge-assets/Frame 347.png" alt="" />
        </div>
        <div className="text-white pb-10">
          <h1 className="text-2xl py-10">Problem Statement</h1>
          <p>
            The wine industry lacks an accessible platform that enables wine
            drinkers, regardless of expertise, to fully appreciate and enjoy{" "}
            <br /> the authentic taste, aroma, and bouquet of their wines as
            intended. Currently, wine enthusiasts face challenges such as long
            <br />
            waiting periods and resorting to artificial methods to aerate their
            wines, compromising the true tasting experience. There is a<br />
            need for a solution that eliminates these barriers and provides a
            convenient way for wine lovers to enhance their enjoyment of <br />{" "}
            wines without compromising quality.
          </p>
        </div>
        <div className="text-white pb-10">
          <h1 className="text-2xl py-10">What we did</h1>
          <p>
            By developing a website for Levare Decanter, we aim to address these
            challenges and provide a platform that offers innovative <br />
            products and resources to revolutionize the wine drinking
            experience. Our goal is to create an online destination where wine{" "}
            <br /> enthusiasts can access reliable information, discover
            products that enhance wine aeration, and connect with a community of
            <br />
            like-minded individuals passionate about true taste.
          </p>
        </div>
      </div>
    </>
  );
}

export default DetailPage;
