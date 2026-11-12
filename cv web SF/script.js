document.addEventListener("DOMContentLoaded", () => {
  // 1. PROFILE PICTURE LIGHTBOX MODAL
  const profileLightbox = document.getElementById("profileLightbox");
  const openLightboxBtn = document.getElementById("openLightboxBtn");
  const closeLightboxBtn = document.getElementById("closeLightboxBtn");

  openLightboxBtn.addEventListener("click", () => {
    profileLightbox.classList.add("active");
    profileLightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  });

  closeLightboxBtn.addEventListener("click", () => {
    closeModal(profileLightbox);
  });

  profileLightbox.addEventListener("click", (event) => {
    if (event.target === profileLightbox) {
      closeModal(profileLightbox);
    }
  });

  // 2. PHONE & WHATSAPP POPUP MODAL
  const phoneModal = document.getElementById("phoneModal");
  const openPhoneModalBtn = document.getElementById("openPhoneModalBtn");
  const closePhoneModalBtn = document.getElementById("closePhoneModalBtn");

  openPhoneModalBtn.addEventListener("click", () => {
    phoneModal.classList.add("active");
    phoneModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  });

  closePhoneModalBtn.addEventListener("click", () => {
    closeModal(phoneModal);
  });

  phoneModal.addEventListener("click", (event) => {
    if (event.target === phoneModal) {
      closeModal(phoneModal);
    }
  });

  // 3. HELPER FUNCTION & ESCAPE KEY SUPPORT
  function closeModal(modalElement) {
    modalElement.classList.remove("active");
    modalElement.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (profileLightbox.classList.contains("active")) {
        closeModal(profileLightbox);
      }
      if (phoneModal.classList.contains("active")) {
        closeModal(phoneModal);
      }
    }
  });
});