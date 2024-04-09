import Image from "next/image";
import Card from "~/components/card-product";
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className="float-end pr-10 mt-10 w-[850px] hidden lg:block">
        <img src="./hyge-assets/Vector 25.png" />
      </div>
      <div className="absolute pl-24 mt-24 hidden lg:block">
        <img src="./hyge-assets/Vector 24.png" />
      </div>
      <div className="p-10 lg:pl-44 mt-10 pb-32">
        <h1 className="text-5xl text-white mb-10">
          Our <b className="text-sky-400">Portfolio</b>
        </h1>
        <p className="text-white text-[20px]">
          As your digital partner, we collaborate with you to drive innovation,{" "}
          <br />
          stay ahead of the curve, and deliver real impact for your business.
        </p>
        <ul className="menu menu-horizontal gap-3 pt-9">
          <li>
            <button className="btn bg-blue-800 text-white border-none rounded-3xl w-[80px]">
              All
            </button>
          </li>
          <li>
            <button className="btn bg-slate-700 border-slate-400 text-white rounded-3xl">
              Web Development
            </button>
          </li>
          <li>
            <button className="btn bg-slate-700 border-slate-400 text-white rounded-3xl">
              App Development
            </button>
          </li>
          <li>
            <button className="btn bg-slate-700 border-slate-400 text-white rounded-3xl">
              UIDesign
            </button>
          </li>
        </ul>
      </div>
      <Link href='/detail-page'>
      <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mb-5 pb-16">
        <Card />
      </div>
      </Link>
      <div className="pl-44 pb-20">
        <button className="btn bg-[#ECECEC4D] rounded-3xl border-none text-white">
          Load More
        </button>
      </div>
      <div className="flex flex-col p-10 lg:pl-40">
        <h1 className="text-5xl text-white mb-10">
          Our <b className="text-sky-400">Clients</b>
        </h1>
        <p className="text-white mb-10">
          Here are just few of the clients we’ve had the privilege to serve:
        </p>
        <div className="grid grid-rows-2">
          <ul className="">
            <button>
              <img src="/hyge-assets/Frame 324.png" alt=""/>
            </button>
            <button>
              <img src="/hyge-assets/Frame 325.png" alt="" />
            </button>
            <button>
              <img src="/hyge-assets/Frame 326.png" alt="" />
            </button>
            <button>
              <img src="/hyge-assets/Frame 327.png" alt="" />
            </button>
            <button>
              <img src="/hyge-assets/Frame 328.png" alt="" />
            </button>
            <button>
              <img src="/hyge-assets/Frame 330.png" alt="" />
            </button>
            <button>
              <img src="/hyge-assets/Frame 332.png" alt="" />
            </button>
            <button>
              <img src="/hyge-assets/Frame 334.png" alt="" />
            </button>
            <button>
              <img src="/hyge-assets/Frame 335.png" alt="" />
            </button>
            <button>
              <img src="/hyge-assets/Frame 336.png" alt="" />
            </button>
            <button>
              <img src="/hyge-assets/Frame 337.png" alt="" />
            </button>
            <button>
              <img src="/hyge-assets/Frame 338.png" alt="" />
            </button>
            <button>
              <img src="/hyge-assets/Frame 339.png" alt="" />
            </button>
          </ul>
        </div>
      </div>
    </>
  );
}
