let page = document.getElementById('page');

function getCookie(cookieName) {
    var name = cookieName + '=';
    var decodedCookie = decodedURIComponent(document.cookie);

    var cookieArr = decodedCookie.split(';');
    for (var cookie in cookieArr) {
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name)===0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return "";
}

function load() {
    if (getCookie('pageclosed') === '') {
        alert('Page has been loaded!');
    } else {
        alert('Page reopened');
    }
}

function unload() {
    document.cookie('pageclosed=YES');
}

let mouseBox = document.getElementById('mouse-box');
mouseBox.addEventListener('mouseover', () => {
    mouseBox.style.backgroundColor = 'red';
    alert('Mouse entered the mouse box');
});

mouseBox.addEventListener('mouseout', () => {
    mouseBox.style.backgroundColor = 'white';
    alert('Mouse has left the mouse box');
});

let form = document.getElementById('form');
form.addEventListener('submit', () => {
});

let formElem = document.getElementById('form-elem');
formElem.addEventListener('change', (val) => {
    alert(`Dropdown was changed. New value: ${formElem.value}`);
});
