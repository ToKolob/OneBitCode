const main = document.querySelector('main')
const root = document.querySelector(':root')

export default function themeSwitch(){
  if (main.dataset.theme === 'dark'){
    root.style.setProperty('--bg-color', '#fff')
    root.style.setProperty('--font-color', '#222')
    root.style.setProperty('--primary-color', '#2a1')
    main.dataset.theme = 'light'
  }
  else{
    root.style.setProperty('--bg-color', '#222')
    root.style.setProperty('--font-color', '#fff')
    root.style.setProperty('--primary-color','#4dff91')
    main.dataset.theme = 'dark'
  }
}