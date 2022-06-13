const themeSwitcher = document.getElementById('theme-switcher');
const body = document.body;

const theme = localStorage.getItem('theme');

/* Taken from https://github.com/utterance/utterances/issues/549 */
function utterancesTheme () {
    if (document.querySelector('.utterances-frame')) {
      const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'github-dark' : 'github-light'
      const message = {
        type: 'set-theme',
        theme: theme
      };
      const iframe = document.querySelector('.utterances-frame');
      iframe.contentWindow.postMessage(message, 'https://utteranc.es');
    }
  }

if (theme) {
    body.classList.add(theme);
}

themeSwitcher.onclick = () => {
    if (body.classList.contains('dark')) {
        body.classList.replace('dark', 'light');
        localStorage.setItem('theme', 'light');
        utterancesTheme();
    } else {
        body.classList.replace('light', 'dark');
        localStorage.setItem('theme', 'dark');
        utterancesTheme();
    }
};


