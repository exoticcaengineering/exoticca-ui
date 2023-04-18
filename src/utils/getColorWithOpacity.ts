export const colorWithOpacity = (
  hexadecimal: string,
  percentage: number,
): string => {
  const opacity = percentage / 100;
  const r = parseInt(hexadecimal.substring(1, 3), 16);
  const g = parseInt(hexadecimal.substring(3, 5), 16);
  const b = parseInt(hexadecimal.substring(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};
