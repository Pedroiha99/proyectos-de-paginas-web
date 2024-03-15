document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("container");
    const registerBtn = document.getElementById("register");
    const loginBtn = document.getElementById("login");

    registerBtn.addEventListener("click", () => {
        container.classList.add("activer");
    });

    loginBtn.addEventListener("click", () => {
        container.classList.remove("activer");
    });
});



/*const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click",() 
=> {
    container.classList.add("activer");
});

loginBtn.addEventListener("click",() 
=> {
    container.classList.remove("activer");
});*/