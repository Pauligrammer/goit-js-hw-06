const form = document.querySelector('.login-form');

form.addEventListener("submit", event => {
    event.preventDefault();
    
    const formObjc = {};
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email === "" || password === "") {
    return window.alert("Please fill in all the fields!");
    }
    
    formObjc.email = email;
    formObjc.password = password;
    console.log(formObjc);
    form.reset();
});