import Hero from "./components/home/hero";
import About from "./components/home/about";
import Service from "./components/home/service";
import Portfollio from "./components/home/portfollio";
import Contact from "./components/home/contact";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Hero />
      <About />
      {/* <Service />
      <Portfollio />
      <Contact /> */}
    </div>
  );
}
