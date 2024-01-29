import { usePreferencesStore } from '$stores/preferences';
import { useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';

import { getOptions } from './config';

export function ParticleBackground() {
  const { preferences } = usePreferencesStore();

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      options={getOptions(preferences.color)}
      init={particlesInit}
    />
  );
}
