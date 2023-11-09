export default function contact() {
  return(
  <div className="lg:flex grid grid-cols-1 w-full gap-5 justify-center lg:mt-40 mt-20">
      <div className="p-5 mt-20 max-w-lg space-y-5">
        <p className="text-theme-primary text-xs font-bold">CONTACT US</p>
        <h2 className="text-5xl font-bold tracking-tighter">
            Konsultasi dengan kami 
            <span className="text-theme-primary ml-2">GRATIS!</span>
        </h2>
        <p className="text-sm text-gray-400">
            Kami siap membantu dan menolong bisnis anda,
            hubungi kami untuk berdiskusi, GRATIS!
        </p>
        <button className="btn">Selengkapnya</button>
      </div>
      <div className="p-5 flex justify-center">
        <img
          class="max-w-2xl w-full rounded-lg" 
          src="./images/contact-us.jpg"
          alt=""
          className="max-w-2xl w-full"
        />
      </div>
    </div>

  );
}
