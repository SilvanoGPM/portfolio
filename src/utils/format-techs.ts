function format(tech: string) {
  const [first, ...rest] = Array.from(tech);
  const titled = first.toUpperCase() + rest.join('').toLocaleLowerCase();

  return titled
    .replace('js', 'JS')
    .replace('Html', 'HTML')
    .replace('Css', 'CSS')
    .replace('Chakra', '')
    .replace('Vscode', '')
    .replace('Intellij', '')
    .replace('Github', '');
}

export function formatTechs(techs: string[]) {
  return techs.map(format).join(', ') + ` entre outras tecnologias`;
}
