let phones = [];

const loadPhones = () => {

    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'phones.json', true);


    xhr.send();


    xhr.onreadystatechange = function () {
        if (xhr.readyState != 4) return;

        button.innerHTML = 'Готово!';

        if (xhr.status != 200) {
            // обработать ошибку
            alert(xhr.status + ': ' + xhr.statusText);
        } else {
            // вывести результат
            phones = JSON.parse(xhr.responseText);
            showPhones(phones);
        }

    }

    button.innerHTML = 'Загружаю...';
    button.disabled = true;
}


const showPhones = phones => {
    
    phones.forEach( phone => {
        const li = list.appendChild(document.createElement('li'));
        const ul = li.appendChild(document.createElement('ul'));
        ul.innerHTML = `<span class="searchable">${phone.name}</span>`;
        for (key in phone) {
            const li = ul.appendChild(document.createElement('li'));
            li.innerHTML = `<span class="searchable">${key}: ${phone[key]}</span>`;
        }
    });

}

const button = document.getElementById('button');
button.addEventListener('click', loadPhones);


const list = document.getElementById('list');
const input = document.getElementById('search');

let timeStart = new Date();
let timePassed;


const resetSearch = () => {
    const html = Array.from(list.querySelectorAll('.highlighted'));
    html.map(element => {
        text = element.textContent;
        element.outerHTML = text;
    });
}

const highlight = search => {
    resetSearch();
    if (search === '') return;

    const html = Array.from(list.querySelectorAll('.searchable'));

    html.map(item => {
        let text = item.textContent;
        let length = text.length;
        let searchableArea = text.toLowerCase();
        let newHTML = '';

        while (searchableArea.indexOf(search) >= 0) {
            const index = searchableArea.indexOf(search);
            newHTML += text.substring(0, index) + "<span class='highlighted'>" +
                text.substring(index, index + search.length) + "</span>";
            searchableArea = text.substring(index + search.length, length).toLowerCase();
            text = text.substring(index + search.length, length);
            length = text.length;
        }
        newHTML += text;
        item.innerHTML = newHTML;
    }
    );
}

handleInputChange = (e) => {
    timePassed = new Date() - timeStart;
    if (timePassed < 100) return;
    timeStart = new Date ();
    highlight(e.target.value);
}

input.addEventListener("input", handleInputChange);

const modal = document.getElementById('authModal');

const btn = document.getElementById("openModalBtn");

const span = document.getElementsByClassName("close")[0];

const showModal = () => modal.style.display = "block";

const closeModal = () => modal.style.display = "none";

btn.addEventListener('click', showModal);

span.addEventListener('click', closeModal);

const loginBtn = document.getElementById('loginBtn');

let users = [];

const onLogin = ({ login, password }) => {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'users.json', true);


    xhr.send();


    xhr.onreadystatechange = function () {
        if (xhr.readyState != 4) return;

        if (xhr.status != 200) {
            // обработать ошибку
            alert(xhr.status + ': ' + xhr.statusText);
        } else {
            // вывести результат
            users = JSON.parse(xhr.responseText);
            handleLogin({ login, password });
        }
    };
};

const loginInput = document.getElementById('login');
const passwordInput = document.getElementById('password');

const handleLogin = ({ login, password }) => {
    let loggedUser;
    for (let i = 0; i < users.length; i += 1) {
        if (users[i].login === login) {
            loggedUser = users[i];
            break;
        }
    };

    let reply;

    if (!loggedUser) {
        alert('User does not exist');
        return;
    }

    if (loggedUser.password !== password) reply = 'Invalid password';
    if (loggedUser.password === password) {
        reply = `User ${loggedUser.name} logged in`;
        loginInput.value = '';
        passwordInput.value = '';
        modal.style.display = "none";
    }
    alert(reply);
}

const handleLoginBtnClick = (e) => {
    e.preventDefault();

    const user = {
        login: loginInput.value,
        password: passwordInput.value
    }

    onLogin(user);
};

loginBtn.addEventListener('click', handleLoginBtnClick);

