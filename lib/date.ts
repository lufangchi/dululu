export function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  const mm = d.getUTCMonth() + 1;
  const dd = d.getUTCDate();
  return `${mm}.${dd}`;
}
