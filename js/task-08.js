const form = document.querySelector('.login-form');

form.addEventListener("submit", event => {
    event.preventDefault();
    
    const login = form.elements.login.value;
    const password = form.elements.password.value;

    if (login === "" || password === "") {
    return alert("Please fill in all the fields!");
    }
    
    console.log(`Login: ${login}, Password: ${password}`);
    form.reset();
});