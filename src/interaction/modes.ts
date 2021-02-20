const body = document.querySelector('body') as HTMLBodyElement;
const mainScreen = document.getElementById('main-screen') as HTMLDivElement;
const settingsBtnMobile = document.getElementById('mobile-settings-btn') as HTMLFontElement;
const logoBanner = document.getElementById('logo-banner') as HTMLDivElement;
const settingsScreenMobile = document.getElementById('settings-screen-mobile') as HTMLDivElement;
const modeIcon = document.getElementById('mode-icon') as HTMLFontElement;
const modeToggler = document.getElementById('mode-toggler') as HTMLFontElement;
const closeIcon = document.getElementById('close-icon') as HTMLFontElement;
const settingsCloseBtn = document.getElementById('close-mobile-settings-btn') as HTMLButtonElement;
const secondSection = document.getElementById('second-section') as HTMLElement;
const description = document.getElementById('description') as HTMLDivElement;

export const changeMode = () => {
    if (modeIcon.classList.contains('fa-moon')){
        modeIcon.classList.remove('fa-moon');
        modeIcon.classList.add('fa-sun');
        modeIcon.style.color = '#FFD600';
        closeIcon.style.color = 'white';
    }
    else{
        modeIcon.classList.remove('fa-sun');
        modeIcon.classList.add('fa-moon');
        modeIcon.style.color = 'black';
        closeIcon.style.color = 'black';
    }
    modeToggler.appendChild(modeIcon);
    settingsCloseBtn.innerHTML = '';
    settingsCloseBtn.appendChild(closeIcon);

    body.classList.toggle('dark');
    mainScreen.classList.toggle('dark');
    settingsBtnMobile.classList.toggle('dark');
    logoBanner.classList.toggle('dark');
    settingsScreenMobile.classList.toggle('dark');
    secondSection.classList.toggle('dark');
    description.classList.toggle('dark');
};