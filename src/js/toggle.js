//themeToggle = <input type="checkbox" id="theme-toggle">
const themeToggle = document.getElementById('theme-toggle');
const toggleBtn = document.getElementsByClassName('toggle-btn')[0];
const toggleLabel = document.getElementsByClassName('label-container')[0];
var theme = '';
 

const getThemeColor = () => {
  if (localStorage.getItem('theme-preference')){
    return localStorage.getItem('theme-preference');
  }else{
    return window.matchMedia('(prefers-color-scheme: dark)').matches 
      ? 'dark' : 'light';}
}


const setThemeColor = (theme) => {
  localStorage.setItem('theme-preference',theme);
  document.firstElementChild.setAttribute('data-theme', theme);
  if(theme == 'dark'){
    themeToggle.checked = true;
    toggleBtn.style.transform = 'translateX(0%)';
  }
  else if(theme == 'light'){
    themeToggle.checked = false;
    toggleBtn.style.transform = 'translateX(110%)';
  }
}


theme = getThemeColor();


window.matchMedia('(prefers-color-scheme: dark)').addEventListener ('change', () => {
  theme = theme == 'dark' ? 'light' : 'dark';
  setThemeColor(theme);
})


window.onload = () => {
  toggleLabel.addEventListener('click',() => {
    theme = theme == 'dark' ? 'light' : 'dark';
    setThemeColor(theme);
  })
  themeToggle.addEventListener('click',() => {
    theme = theme == 'dark' ? 'light' : 'dark';
    setThemeColor(theme);
  })
  setThemeColor(theme);
}


