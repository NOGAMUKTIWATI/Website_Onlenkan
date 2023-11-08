export default function hero() {
  return (
    <div className="lg:flex grid grid-cols-1 w-full gap-5 justify-center lg:mt-40 mt-20">
      <div className="p-5 mt-20 max-w-lg space-y-5">
        <h2 className="text-5xl font-bold tracking-tighter">
          Perluas Jangkauan Bisnis Anda dengan Website
        </h2>
        <p className="text-sm text-gray-400">
          Website telah menjadi kebutuhan dasar untuk mengembangkan bisnis Anda
          di era digital ini. Oleh sebab itu, #onlenkanbisnismu untuk naik ke
          level dunia!
        </p>
        <button className="btn">Hubungi Kami</button>
      </div>
      <div className="p-5 flex justify-center">
        <img
          src="./images/header-img.png"
          alt=""
          className="max-w-2xl w-full"
        />
      </div>
    </div>
  );
}
