import heroBg from "../../assets/images/hero-bg.png";
export default function Hero() {
  return (
    <section
      className="
        relative
        h-screen
        bg-cover
        bg-center
        flex
        items-center
        justify-center
      "
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1
          className="
            text-5xl
            md:text-7xl
            font-bold
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
            md:text-2xl
            text-gray-300
            max-w-2xl
            mx-auto
          "
        >
          Build, share, and analyze polls with a modern and interactive
          experience.
        </p>
        <button className="btn mt-4">Explore (👉ﾟヮﾟ)👉</button>

        
      </div>
    </section>
  )
}
