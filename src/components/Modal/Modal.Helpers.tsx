export const createRandomId = (length = 12) => {
  const pow = Math.pow(10, length);
  const randomNumber = Math.floor(Math.random() * pow + 1);
  return randomNumber;
};

export const disableScroll = () => {
  if (!document.body.classList.contains('disableScroll')) {
    document.body.classList.add('disableScroll');
  }
};

export const enableScroll = () => {
  if (document.body.classList.contains('disableScroll')) {
    document.body.classList.remove('disableScroll');
  }
};
export const getCookie = (name: string): string => {
  if (typeof window === 'undefined') return '';
  const v =
    document && document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return v ? v[2] : '';
};
