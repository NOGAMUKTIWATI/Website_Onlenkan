export default function navbar() {
  return (
    <div className="header-layout p-2 fixed w-full bg-white top-0 border-b">
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
            <ul className="flex gap-8 justify-center text-sm tracking-tighter">
              <li>
                <a
                  href=""
                  className="text-theme-primary font-bold"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a href="">Tentang Kami</a>
              </li>
              <li>
                <a href="">Layanan</a>
              </li>
              <li>
                <a href="">Portfolio</a>
              </li>
              <li>
                <a href="">Academy</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
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
