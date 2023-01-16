export function formatDate(
  date: Date,
  dateStyle: 'full' | 'long' | 'medium' | 'short' = 'full',
) {
  const formatter = new Intl.DateTimeFormat('pt-BR', {
    dateStyle,
  });

  return formatter.format(date);
}
