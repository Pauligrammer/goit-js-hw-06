const rangeControl = document.getElementById('font-size-control');
const spanTxt = document.getElementById('text');

rangeControl.addEventListener('input', () => {
    spanTxt.style.fontSize = rangeControl.value + "px";
});