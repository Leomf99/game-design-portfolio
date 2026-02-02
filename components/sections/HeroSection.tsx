export default function HeroSection() {
  return (
    <div
      id="home"
      className="relative h-screen w-full overflow-hidden bg-black "
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/NMW_gameplay_showcase.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-brand-red-subtle/40" />
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-4 text-center text-white">
        <div className="text-4xl md:text-8xl">Alexis Islas Valdés</div>
        <div className="text-xl md:text-4xl">Game Designer</div>
      </div>
    </div>
  );
}
