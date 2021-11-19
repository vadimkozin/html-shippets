(function() {
  document.addEventListener("DOMContentLoaded", () => {
    const togglerSchema = document.querySelector('#toggler-schema');
    const togglerInput = togglerSchema.querySelector('.toggler__input');
    const togglerSchemaModal = document.querySelector('#toggler-schema-modal');
    const togglerInputModal = togglerSchemaModal.querySelector('.toggler__input');
    const sun = document.querySelector("#sun");
    const moon = document.querySelector("#moon");
    const html = document.querySelector("html");

    const setTheme = (elActive, elPassive) => {
      const schema = elActive.checked ? "dark" : "light";
      html.setAttribute('data-mode', schema);
      sessionStorage.setItem('schema', schema);
      if (elPassive) {
        elPassive.checked = elActive.checked;
      }
    }

    if (togglerSchema && togglerInput) {
      togglerSchema.addEventListener("change", () => {
        setTheme(togglerInput, togglerInputModal);
      })
    }

    if (togglerSchemaModal && togglerInputModal) {
      togglerSchemaModal.addEventListener("change", () => {
        togglerInputModal.toggleAttribute('checked');
        setTheme(togglerInputModal, togglerInput);
      })
    }

    if (sun) {
      sun.addEventListener("click", () => {
        togglerInput.checked = false;
        setTheme(togglerInput, togglerInputModal);
      })
    }

    if (moon) {
      moon.addEventListener("click", () => {
        togglerInput.checked = true;
        setTheme(togglerInput, togglerInputModal);
      })
    }
  })
})();

