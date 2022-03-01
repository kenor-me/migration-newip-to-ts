import './theme.css';

export class Theme {
  value: boolean;

  constructor() {
    this.value = false;
  }

  draw(): void {
    const wrapper = document.createElement('div') as HTMLDivElement;
    wrapper.className = 'theme-wrapper';
    wrapper.innerHTML = `<label class="theme-label" for="theme-checkbox">
                         <input type="checkbox" id="checkbox" class="theme-input"}>
                         <div class = "slider round"></div>
                         </label>
                         <span>Change Theme</span>`;
    (document.querySelector('.header') as HTMLElement).append(wrapper);
    const newsItemTemp = document.querySelector('#checkbox') as HTMLInputElement;
    const dataLocalStorage = localStorage.getItem('theme');
    if (dataLocalStorage) {
      if (dataLocalStorage === 'true') {
        this.value = true;
      }
    } else {
      localStorage.setItem('theme', JSON.stringify(newsItemTemp.checked));
    }
    this.load(this.value);
    wrapper.addEventListener('click', (e: Event): void => this.changeTheme(e));
  }

  load(value: boolean): void {
    const newsItemTemp = document.querySelector('#checkbox') as HTMLInputElement;
    if (value) {
      newsItemTemp.checked = true;
      document.body.style.backgroundColor = 'rgb(35 47 84)';
    } else {
      newsItemTemp.checked = false;
      document.body.style.backgroundColor = '#17181c';
    }
  }

  changeTheme(e: Event): void {
    const target = e.target as HTMLElement;
    if (target.classList.contains('round')) {
      const newsItemTemp = document.querySelector('#checkbox') as HTMLInputElement;
      if (newsItemTemp.checked) {
        newsItemTemp.checked = false;
        this.value = false;
        document.body.style.backgroundColor = '#17181c';
      } else {
        newsItemTemp.checked = true;
        this.value = true;
        document.body.style.backgroundColor = 'rgb(35 47 84)';
      }
      localStorage.setItem('theme', JSON.stringify(newsItemTemp.checked));
    }
  }
}

export default Theme;
