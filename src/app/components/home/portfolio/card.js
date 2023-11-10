export default function card({ title, image, desc, link, category }) {
  return (
    <div className="card border transform translate-y-0 hover:-translate-y-2 transition-all p-5 h-auto rounded-md bg-white space-y-5">
      <div className="image-cover">
        <img
          src={image}
          alt=""
          className="w-full rounded-tr-md rounded-tl-md"
        />
      </div>
      <div className="card-title">
        <h2 className="font-bold text-2xl tracking-tighter">{title}</h2>
      </div>
      <div className="card-category flex gap-2">
        {category.map((item, index) => (
          <span
            key={index}
            className="rounded-full hover:bg-theme-primary hover:text-white border px-4 py-1 font-bold text-xs border-theme-primary text-theme-primary"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="card-description">
        <p className="max-w-lg text-sm text-gray-500">{desc}</p>
      </div>
    </div>
  );
}
