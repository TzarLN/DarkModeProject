const toggleSwitch =document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

function toggleDarkLightMode(isDark) {
    nav.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = isDark ? 'rgb(255 255 255 / 50%)' : 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';
    isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    if(isDark === true) {
        image1.src = 'img/dark1.svg';
        image2.src = 'img/dark2.svg';
        image3.src = 'img/dark3.svg';
    } else {
        image1.src = 'img/light1.svg';
        image2.src = 'img/light2.svg';
        image3.src = 'img/light3.svg';
    }

}

//Switch theme dynamically
function switchTheme(event) {
    const checkbox = event.target.checked;
    if(checkbox) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
       toggleDarkLightMode(true);
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
       toggleDarkLightMode(false);
    }
}


//Event Listener
toggleSwitch.addEventListener('change', switchTheme);

//Check Local storage for them

const currentTheme = localStorage.getItem('theme');
if(currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if(currentTheme === 'dark') {
        toggleSwitch.checked = true;
       toggleDarkLightMode(true);
    }
}