const secondSection = document.getElementById('second-section') as HTMLElement;
const sortBtnMobile = document.getElementById('sort-btn-mobile') as HTMLButtonElement;
const settingsScreenContainer = document.getElementById('setting-sort-container') as HTMLDivElement;

export const scrollTrigger = () => {

    document.addEventListener('scroll', e => {
        if (window.scrollY === secondSection.offsetTop){
            sortBtnMobile.classList.add('scroll-visible');
            settingsScreenContainer.classList.add('scroll-visible');
        }
    });
};