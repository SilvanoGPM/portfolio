import { useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';

import { options } from './config';

export function ParticleBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return <Particles id="tsparticles" options={options} init={particlesInit} />;
}
