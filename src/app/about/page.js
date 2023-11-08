export default function about() {
  return <div className="lg:flex grid grid-cols-1 w-full gap-5 justify-center lg:mt-40 mt-20">
  <div className="p-5 mt-20 max-w-lg space-y-5">
  <div className="p-5 flex justify-center">
    <img
      src="./images/header-img.png"
      alt=""
      className="max-w-2xl w-full"
    />
  </div>
    <h2 className="text-5xl font-bold tracking-tighter">
        Fokus kelola bisnis Anda, biar kami yang Onlenkan!
    </h2>
    <p className="text-sm text-gray-400">
    Kami adalah tim programmer dan desainer millenial profesional yang telah membuat banyak website menarik dan produk digital lainnya yang cocok untuk segala kebutuhan bisnis Anda di era industri 4.0.
    </p>
    <button className="btn">Selengkapnya</button>
  </div>
  
</div>  
}
