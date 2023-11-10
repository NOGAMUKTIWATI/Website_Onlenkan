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
          <div className="menu mt-6 lg:block hidden">
            <ul className="flex gap-8 justify-center text-sm">
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
