export default function contact() {
  return (
    <div className="lg:flex grid grid-cols-1 w-full gap-5 justify-center lg:mt-40 mt-20">
      <div className="p-5 mt-20 max-w-lg space-y-5">
        <h2 className="text-xs font-bold tracking-tighter text-theme-primary">
          CONTACT US
        </h2>
        <h2 className="text-4xl font-bold tracking-tighter">
          Konsultasi dengan kami GRATIS!
        </h2>
        <p className="text-sm text-gray-400 max-w-sm">
          Kami siap membantu dan menolong bisnis anda, hubungi kami untuk
          berdiskusi, GRATIS!
        </p>
        <button className="btn font-bold">Hubungi Kami</button>
      </div>
      <div className="p-5 flex justify-center">
        <img
          src="./images/contact-us.jpg"
          alt=""
          className="lg:max-w-lg w-full max-w-full"
        />
      </div>
    </div>
  );
}
