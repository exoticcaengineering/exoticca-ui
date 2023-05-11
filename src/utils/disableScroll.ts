export const disableScroll = () => {
  if (!document.body.classList.contains('disableScroll')) {
    document.body.classList.add('disableScroll');
  }
};
