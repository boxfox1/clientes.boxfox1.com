/* =========================================================
   Boxfox1 — clientes.js
   - Drawer móvil (navbtn + panel)
   - Modales: privacidad / términos / comunicación legal
   - Demo: botón "Continuar" muestra aviso (no auth real)
   ========================================================= */

(() => {
  // Drawer
  const navBtn = document.querySelector("[data-navbtn]");
  const panel = document.querySelector("[data-panel]");

  if (navBtn && panel) {
    navBtn.addEventListener("click", () => {
      const open = panel.classList.toggle("is-open");
      navBtn.setAttribute("aria-expanded", open ? "true" : "false");
      panel.setAttribute("aria-hidden", open ? "false" : "true");
    });
  }

  // Modal helpers
  const body = document.body;
  const modals = {
    privacy: document.getElementById("privacyModal"),
    terms: document.getElementById("termsModal"),
    legal: document.getElementById("legalModal"),
  };

  function openModal(modal) {
    if (!modal) return;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    body.classList.add("is-modal-open");
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    body.classList.remove("is-modal-open");
  }

  function closeAnyOpenModal() {
    Object.values(modals).forEach((m) => m && closeModal(m));
  }

  // Openers
  document.querySelectorAll("[data-open-privacy]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      openModal(modals.privacy);
    });
  });

  document.querySelectorAll("[data-open-terms]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      openModal(modals.terms);
    });
  });

  document.querySelectorAll("[data-open-legal]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      openModal(modals.legal);
    });
  });

  // Closers
  document.querySelectorAll("[data-modal-close]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      closeAnyOpenModal();
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeAnyOpenModal();
  });

  // Demo action (no auth real)
  const demoBtn = document.querySelector("[data-demo-login]");
  if (demoBtn) {
    demoBtn.addEventListener("click", () => {
      alert(
        "Acceso: este portal es estático.\n\n" +
          "El ingreso real se realiza en la carpeta protegida de tu cliente (por ejemplo: /cummins/).\n" +
          "Si necesitas acceso, solicita alta en info@boxfox1.com."
      );
    });
  }
})();