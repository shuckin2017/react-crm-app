export default {
  elemHide(element, time) {
    setTimeout(() => {
      element.setAttribute('hidden', '');
    }, time);
  },

  elemShow(element, time) {
    setTimeout(() => {
      element.removeAttribute('hidden');
    }, time);
  },

}