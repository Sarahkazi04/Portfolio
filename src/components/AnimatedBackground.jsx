function AnimatedBackground() {
  return (
    <>
      <div className="fixed inset-0 -z-20 bg-[#050816]" />

      <div className="fixed -top-40 -left-40 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[140px] animate-pulse -z-10" />

      <div
        className="fixed top-1/3 -right-40 w-[450px] h-[450px] bg-cyan-500/15 rounded-full blur-[150px] -z-10"
        style={{
          animation: "float1 10s ease-in-out infinite",
        }}
      />

      <div
        className="fixed bottom-0 left-1/3 w-[350px] h-[350px] bg-indigo-500/15 rounded-full blur-[120px] -z-10"
        style={{
          animation: "float2 12s ease-in-out infinite",
        }}
      />
    </>
  );
}

export default AnimatedBackground;