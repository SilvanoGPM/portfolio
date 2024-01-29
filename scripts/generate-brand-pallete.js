// eslint-disable-next-line @typescript-eslint/no-var-requires
const Color = require('color');

const INCREASE_VALUE = 0.025;

const color = Color(process.argv[2]);

const pallete = {
  50: color
    .lighten(INCREASE_VALUE / 2)
    .hex()
    .toLowerCase(),

  500: color.hex().toLowerCase(),
};

for (let i = 1; i <= 4; i++) {
  pallete[i * 100] = color
    .lighten(i * INCREASE_VALUE)
    .hex()
    .toLowerCase();
}

for (let i = 6; i <= 9; i++) {
  pallete[i * 100] = color
    .darken(i * INCREASE_VALUE)
    .hex()
    .toLowerCase();
}

if (process.argv[3] === 'alpha') {
  for (let i = 1; i <= 4; i++) {
    pallete[`alpha.${i * 100}`] = color
      .alpha(i / 10)
      .rgb()
      .toString();
  }

  pallete['alpha.500'] = color.fade(0.5).rgb().toString();

  for (let i = 6; i <= 9; i++) {
    pallete[`alpha.${i * 100}`] = color
      .alpha(i / 10)
      .rgb()
      .toString();
  }
}

console.log(pallete);
