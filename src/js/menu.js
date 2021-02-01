(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const menuBtnClsRef = document.querySelector("[data-menu-button-close]");
  const mobileMenuRef = document.querySelector("[data-menu]");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
  });

  menuBtnClsRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
  });
})();

(() => {
  const refs = {
    lockOverflowBtn: document.querySelector('[data-lock]'),
    unlockOverflowBtn: document.querySelector('[data-unlock]'),
  };

  refs.lockOverflowBtn.addEventListener('click', toggleModal);
  refs.unlockOverflowBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle("lock");
  }
})();