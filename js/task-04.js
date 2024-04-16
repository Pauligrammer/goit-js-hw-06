let counterValue = 0;

const spanValue = document.getElementById('value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

decrementBtn.addEventListener('click', () => {
    counterValue--;
    spanValue.textContent = counterValue;
});

incrementBtn.addEventListener('click', () => {
    counterValue++;
    spanValue.textContent = counterValue;
});