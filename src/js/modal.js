(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    openModalBurgerBtn: document.querySelector('[data-modal-burger-menu-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openModalBurgerBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    lockOverflowBtn: document.querySelector('[data-modal-lock]'),
    lockOverflowBurgerBtn: document.querySelector('[data-modal-burger-menu-lock]'),
    unlockOverflowBtn: document.querySelector('[data-modal-unlock]'),
  };

  refs.lockOverflowBtn.addEventListener('click', toggleModal);
  refs.lockOverflowBurgerBtn.addEventListener('click', toggleModal);
  refs.unlockOverflowBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle("lock");
  }
})();
