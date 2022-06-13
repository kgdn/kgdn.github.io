const themeSwitcher = document.getElementById('theme-switcher');
const body = document.body;

const theme = localStorage.getItem('theme');

if (theme) {
    body.classList.add(theme);
}

themeSwitcher.onclick = () => {
    if (body.classList.contains('dark')) {
        body.classList.replace('dark', 'light');
        localStorage.setItem('theme', 'light');
        body.style.transition = 'background-color 0.5s ease-in-out';
    } else {
        body.classList.replace('light', 'dark');
        localStorage.setItem('theme', 'dark');
        body.style.transition = 'background-color 0.5s ease-in-out';
    }
};


