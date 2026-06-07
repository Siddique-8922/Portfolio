const ParticleBackground = () => {
  return (
    <>
      <div className="fixed inset-0 -z-10">

        <div className="absolute inset-0 bg-[#010810]" />

        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,245,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,.08) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-cyan-500/10 blur-[150px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-pink-500/10 blur-[150px] rounded-full" />

      </div>
    </>
  );
};

export default ParticleBackground;