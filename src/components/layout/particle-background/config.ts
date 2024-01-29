import { ColorTheme, colorThemes } from '$styles/color-theme';
import { type ISourceOptions } from 'tsparticles-engine';

export function getOptions(color: ColorTheme): ISourceOptions {
  const theme = colorThemes[color];

  return {
    fpsLimit: 30,
    particles: {
      number: {
        value: 150,
        density: {
          enable: true,
        },
      },
      color: {
        value: [...Object.values(theme)],
      },
      opacity: {
        value: { min: 0.1, max: 0.5 },
      },
      size: {
        value: { min: 1, max: 3 },
      },
      move: {
        enable: true,
        speed: 6,
        random: false,
      },
      interactivity: {
        events: {
          onhover: {
            enable: false,
          },
        },
      },
    },
  };
}
