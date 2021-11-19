(function() {
  document.addEventListener("DOMContentLoaded", () => {
    const html = document.querySelector("html");
    const togglerSchema = document.querySelector('#toggler-schema');
    const togglerInput = togglerSchema.querySelector('.toggler__input');
    const togglerSchemaModal = document.querySelector('#toggler-schema-modal');
    const togglerInputModal = togglerSchemaModal.querySelector('.toggler__input');

    const schema = sessionStorage.getItem('schema') || 'light';

    html.setAttribute('data-mode', schema);
    togglerInput.checked = (schema == 'light') ? false : true;
    togglerInputModal.checked = (schema == 'light') ? false : true;
  })
})();

