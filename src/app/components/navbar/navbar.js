"use client";

import { useState } from "react";

const menus = [
  {
    title: "Beranda",
    href: "/",
    active: true,
  },
  {
    title: "Tentang Kami",
    href: "/",
    active: false,
  },
  {
    title: "Layanan",
    href: "/",
    active: false,
  },
  {
    title: "Portfolio",
    href: "/",
    active: false,
  },
  {
    title: "Academy",
    href: "/",
    active: false,
  },
  {
    title: "Blog",
    href: "/",
    active: false,
  },
];

export default function navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleMenus = () => {
    setToggleMenu((current) => !current);
  };

  return (
    <div className="header-layout p-2 fixed w-full bg-white top-0 border-b z-40">
      <header className="container mx-auto lg:max-w-6xl max-w-full">
        <div className="flex gap-5 justify-between">
          <div className="logo-brand">
            <img
              src="./images/logo/logo.png"
              alt=""
              className="w-32"
            />
          </div>
          <div className="lg:hidden block mt-6">
            <button onClick={toggleMenus}>
              <svg
                className="mr-5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M0 3.75A.75.75 0 0 1 .75 3h14.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 3.75ZM0 8a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 8Zm.75 3.5a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H.75Z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div
            className={`menu mt-6 lg:h-auto h-screen lg:w-auto w-full 
            ${toggleMenu ? "block" : "lg:block hidden"}`}
          >
            <ul className="lg:flex block gap-8 justify-center text-sm">
              {menus.map((item, index) => (
                <li className="menu-item">
                  <a
                    href=""
                    key={index}
                    className={item.active ? "active-menu" : ""}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="contact mt-4 lg:block hidden">
            <button className="btn font-bold">Hubungi Kami</button>
          </div>
        </div>
      </header>
    </div>
  );
}
