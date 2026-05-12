import heroBg from "./assets/images/hero-bg.png";
import FeatureCard from "./components/FeatureCard";

function App() {
  return (
    <>
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

    {/* // feature section */}
<section className="bg-[var(--bg-primary)] h-full p-20">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  <FeatureCard
    icon="analytics"
    title="Live Analytics"
    description="Track votes and poll engagement with beautiful real-time insights."
  />

  <FeatureCard
    icon="create"
    title="Instant Creation"
    description="Build modern interactive polls within seconds using a clean workflow."
  />

  <FeatureCard
    icon="share"
    title="Easy Sharing"
    description="Share polls anywhere with secure public and private access."
  />
</div>
</section>

</>
  );
}

export default App;
