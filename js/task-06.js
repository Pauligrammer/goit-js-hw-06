const input = document.getElementById('validation-input');
const correctLength = Number(input.getAttribute('data-length'));

input.addEventListener('blur', () => {
    if (input.value.length === correctLength) {
        input.className = "valid"
    }
    else {
        input.className = "invalid"
    }
});