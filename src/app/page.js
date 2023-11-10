import Hero from "./components/home/hero";
import About from "./components/home/about";
import Service from "./components/home/service";
import Portfolio from "./components/home/portfolio";
import Contact from "./components/home/contact";

export default function Home() {
  return (
    <div className="home">
      <div className="container mx-auto">
        <Hero />
        <About />
      </div>
      <Service />
      <div className="container mx-auto">
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}
