// import React from 'react'

function Footer() {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto py-10 flex gap-32">
        <div className="basis-1/2">
          <h1 className="text-[10rem] font-normal leading-none tracking-tight">
            Refokus.
          </h1>
        </div>
        <div className="basis-1/2 flex gap-4">
          <div className="basis-1/3">
            <h4 className="mb-4 text-zinc-300 capitalize">Socials</h4>
            {["instagram", "twitter (x?)", "LinkedIn"].map((item, index) => (
              <a key={index} className="block mt-2 text-zinc-500 capitalize">
                {item}
              </a>
            ))}
          </div>
          <div className="basis-1/3">
            <h4 className="mb-4 text-zinc-300 capitalize">Socials</h4>
            {["instagram", "twitter (x?)", "LinkedIn"].map((item, index) => (
              <a key={index} className="block mt-2 text-zinc-500 capitalize">
                {item}
              </a>
            ))}
          </div>
          <div className="basis-1/2  flex flex-col items-end">
            <p className="text-zinc-300 text-right">
              Refokus is a pioneering digtial agency driven by design and
              empowered by technology.
            </p>
            <img
              src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg"
              alt=""
              className="w-40 mt-10 "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
