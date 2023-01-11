const formatter = new Intl.DateTimeFormat('pt-BR', {
  dateStyle: 'full',
});

export function dateFormat(date: Date) {
  return formatter.format(date);
}
