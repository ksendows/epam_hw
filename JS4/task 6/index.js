const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const login = form.querySelector("#username");
    const password = form.querySelector("#password");
    console.log(`Login: ${login.value}`); 
    console.log(`Password: ${password.value}`);
    e.target.reset();
    return;
}

const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const search = form.querySelector("#search");
    if (search.value === '') return;
    console.log(`Input search: ${search.value}`);
    e.target.reset();
    return;
}

document.getElementById("login_form").addEventListener("submit", handleLogin);
document.getElementById("search_form").addEventListener("submit", handleSearch);