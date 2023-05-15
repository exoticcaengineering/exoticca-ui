export const createRandomId = (length = 12) => {
  const pow = Math.pow(10, length);
  const randomNumber = Math.floor(Math.random() * pow + 1);
  return randomNumber;
};
