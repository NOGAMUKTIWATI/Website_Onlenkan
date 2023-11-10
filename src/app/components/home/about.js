export default function about() {
  return (
    <div className="lg:flex grid grid-cols-1 p-5 gap-5 w-full justify-center pb-20">
      <div className="lg:p-2 p-0 w-full">
        <img
          src="./images/homepage-about-image.jpg"
          alt=""
          className="rounded-lg max-w-lg mx-auto mt-32 w-full"
        />
      </div>
      <div className="p-2 w-full space-y-8 lg:mt-28 mt-0">
        <div className="head-title space-y-3">
          <p className="text-theme-primary text-xs font-bold">ABOUT US</p>
          <h2 className="font-bold text-4xl max-w-lg">
            Fokus kelola bisnis Anda, biar kami yang
            <span className="text-theme-primary ml-2">Onlenkan!</span>
          </h2>
        </div>
        <p className="tracking-tight max-w-lg text-neutral-500 text-sm">
          Kami adalah tim programmer dan desainer millenial profesional yang
          telah membuat banyak website menarik dan produk digital lainnya yang
          cocok untuk segala kebutuhan bisnis Anda di era industri 4.0.
        </p>
        <button className="btn font-bold">Selengkapnya</button>
        <div className="flex gap-10 w-full">
          <div className="">
            <h2 className="font-bold text-2xl">50+</h2>
            <p>Project Success</p>
          </div>
          <div className="">
            <h2 className="font-bold text-2xl">24+</h2>
            <p>Clients</p>
          </div>
          <div className="">
            <h2 className="font-bold text-2xl">30+</h2>
            <p>Tech Talents</p>
          </div>
        </div>
      </div>
    </div>
  );
}
