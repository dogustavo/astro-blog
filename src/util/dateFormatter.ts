export const formattedDate = (data: Date) =>
  data
    .toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    })
    .replace(/de /g, '')
