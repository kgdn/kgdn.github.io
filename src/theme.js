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
    } else {
        body.classList.replace('light', 'dark');
        localStorage.setItem('theme', 'dark');
    }
};


