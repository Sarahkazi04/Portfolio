import { useMemo } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

function ParticlesBackground() {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  const options = useMemo(
    () => ({
      fullScreen: {
        enable: false,
      },
      background: {
        color: "transparent",
      },
      particles: {
        number: {
          value: 45,
        },
        color: {
          value: "#3b82f6",
        },
        links: {
          enable: true,
          color: "#2563eb",
          opacity: 0.3,
          distance: 140,
        },
        move: {
          enable: true,
          speed: 1.2,
        },
        opacity: {
          value: 0.5,
        },
        size: {
          value: 2,
        },
      },
    }),
    []
  );

  return (
    <Particles
      id="particles"
      init={particlesInit}
      options={options}
      className="absolute inset-0 -z-10"
    />
  );
}

export default ParticlesBackground;