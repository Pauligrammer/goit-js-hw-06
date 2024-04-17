const rangeControl = document.getElementById('font-size-control');
const spanTxt = document.getElementById('text');

rangeControl.addEventListener('input', () => {
    const fontSize = rangeControl.value;

    spanTxt.style.fontSize = `${fontSize}px`
});