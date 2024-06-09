function detectInput() {
    const inputField = document.getElementById('inputField');
    const result = document.getElementById('result');
    const inputValue = inputField.value;

    if (inputValue === '') {
        result.textContent = 'Harap masukkan teks.';
        result.style.color = 'red';
        return;
    }

    if (!isNaN(inputValue) && inputValue.trim() !== '') {
        result.textContent = 'Ini adalah angka.';
        result.style.color = 'green';
    } else {
        result.textContent = 'Ini bukan angka.';
        result.style.color = 'red';
    }
}
