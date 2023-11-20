export default function card({ image, title, description }) {
  return (
    <div className="card p-8 bg-white text-center space-y-5 rounded-md w-full transform translate-y-0 hover:-translate-y-5 transition-all">
      <div className="flex justify-center">
        <img
          src={image}
          alt=""
        />
      </div>
      <div className="card-title">
        <h2 className="font-bold">{title}</h2>
      </div>
      <div className="card-description">
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <button className="btn font-bold">Selengkapnya</button>
    </div>
  );
}
