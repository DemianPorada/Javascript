    document.addEventListener("DOMContentLoaded", () => {
    // Завдання 1
    const radios = document.querySelectorAll('input[name="color"]');
    radios.forEach(radio => {
      radio.addEventListener('change', event => {
        document.body.style.backgroundColor = event.target.value;
      });
    });

    const checkedColor = document.querySelector('input[name="color"]:checked');
    if (checkedColor) {
      document.body.style.backgroundColor = checkedColor.value;
    }

    // Завдання 2
    const nameInput = document.getElementById('name-input');
    const nameOutput = document.getElementById('name-output');

    nameInput.addEventListener('input', () => {
      nameOutput.textContent = nameInput.value.trim() ? nameInput.value : 'незнайомець';
    });

    // Завдання 3
    const validationInput = document.getElementById('validation-input');
    const requiredLength = Number(validationInput.dataset.length);

    validationInput.addEventListener('blur', () => {
      const isValid = validationInput.value.trim().length === requiredLength;
      validationInput.classList.remove('valid', 'invalid');
      validationInput.classList.add(isValid ? 'valid' : 'invalid');
    });

    // Завдання 4
    const rangeInput = document.getElementById('font-size-control');
    const textSpan = document.getElementById('text');

    rangeInput.addEventListener('input', () => {
      textSpan.style.fontSize = `${rangeInput.value}px`;
    });
    textSpan.style.fontSize = `${rangeInput.value}px`;
  });