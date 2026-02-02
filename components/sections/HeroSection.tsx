export default function HeroSection() {
  return (
    <div
      id="home"
      className="relative h-screen w-full overflow-hidden bg-black"
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
      <div className="relative text-center flex-col gap-4 z-10 flex h-full w-full items-center justify-center text-white">
        <div className="text-8xl">Alexis Islas Valdés</div>
        <div className="text-4xl">Game Designer</div>
      </div>
    </div>
  );
}
