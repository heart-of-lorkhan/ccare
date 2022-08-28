const detectCollision = (rect1, rect2) => {
  if (rect1.x < rect2.x + rect2.width &&
    rect1.x + rect1.width > rect2.x &&
    rect1.y < rect2.y + rect2.height &&
    rect1.y + rect1.height > rect2.y) {
    return true;
  }

  return false;
};

export const scrollHeader = () => {
  let scrollpos = window.scrollY;
  const header = document.querySelector('header');
  const apply = document.getElementById('apply');
  const form = document.getElementById('form');
  const headerHeight = header.offsetHeight;
  let headerRect = header.getBoundingClientRect();
  let formRect = form.getBoundingClientRect();
  let applyRect = apply.getBoundingClientRect();
  let hasCollisionHeader = detectCollision(headerRect, formRect);
  let hasCollisionApply = detectCollision(applyRect, formRect);

  const addClassOnScroll = () => header.classList.add('has-scrolled');
  const hideOnCollision = (element) => element.classList.add('hidden');
  const showOutOfCollision = (element) => element.classList.remove('hidden');
  const removeClassOnScroll = () => header.classList.remove('has-scrolled');

  window.addEventListener('scroll', () => {
    scrollpos = window.scrollY;
    headerRect = header.getBoundingClientRect();
    formRect = form.getBoundingClientRect();
    applyRect = apply.getBoundingClientRect();
    hasCollisionHeader = detectCollision(headerRect, formRect);
    hasCollisionApply = detectCollision(applyRect, formRect);

    if (scrollpos >= headerHeight && !hasCollisionHeader) {
      addClassOnScroll();
      showOutOfCollision(header);
    } else if (scrollpos <= headerHeight) {
      showOutOfCollision(header);
      removeClassOnScroll();
    }	else {
      removeClassOnScroll();
      hideOnCollision(header);
    }

    setTimeout(function() {
      if (!hasCollisionApply) {
        showOutOfCollision(apply);
        apply.classList.add('no-focus');
      } else {
        hideOnCollision(apply);
        apply.classList.remove('no-focus');
      }
    }, 1500)
  });

  if (scrollpos >= headerHeight) {
    addClassOnScroll();
  }
};

export default scrollHeader;
