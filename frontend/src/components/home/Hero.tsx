import { Link } from "react-router-dom";
import heroBg from "../../assets/images/hero-bg.png";
import { useState , useEffect} from "react";
export default function Hero() {

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = heroBg;
    img.onload = () => setLoaded(true);
  }, []);


  return (
<section className="
  relative
  h-screen
  bg-cover
  bg-center
  flex
  items-center
  justify-center
">
  {/* Gradient placeholder */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#111111] via-[#222222] to-[#c02427]" />

  {/* Hero image */}
  <div
    className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
      loaded ? "opacity-100" : "opacity-0"
    }`}
    style={{ backgroundImage: `url(${heroBg})` }}
  />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1
          className="
            text-4xl
            md:text-6xl
            font-extrabold
            text-white
            mb-4
            heading-outline
          "
        >
          Create Polls That Matter
        </h1>

        <p
          className="
            text-lg
            md:text-xl
            text-gray-300
            max-w-xl
            mx-auto
          "
        >
          Build, share, and analyze polls with a modern and interactive
          experience.
        </p>
        <Link to="/polls" className="btn inline-block p-2 mt-6 rounded ">Explore (👉ﾟヮﾟ)👉</Link>

        
      </div>
    </section>
  )
}
