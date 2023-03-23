export const mapCssPxValue = (...args: number[]) => {
  const length = args.length;
  if (length < 1 || length > 4) return '0px';
  return args.map((value) => `${value}px`).join(' ');
};
