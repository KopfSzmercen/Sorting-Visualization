import { createDivs } from '../screen/create-divs';
import { sortFunction } from '../screen/sorting/index';
import type { screenObjInterface } from '../screen/interfaces';
import { changeMode } from './modes';

export const handleUserInteraction = (screenObj: screenObjInterface) => {

    const mobileMenuBtnM = document.getElementById('mobile-settings-btn') as HTMLButtonElement;
    const settingsScreenMobileM = document.getElementById('settings-screen-mobile') as HTMLDivElement;
    const closeMobileMenuM = document.getElementById('close-mobile-settings-btn') as HTMLFontElement;

    const numbersQuantitySliders = document.querySelectorAll<HTMLInputElement>('#numbers-number-slider');
    const numbersQuantityVals = document.querySelectorAll<HTMLParagraphElement>('#numbers-number-slider-value');

    const delaySliders = document.querySelectorAll<HTMLInputElement>('#delay-slider');
    const delayValues= document.querySelectorAll<HTMLParagraphElement>('#delay-value');

    const mainScreen = document.getElementById('main-screen') as HTMLDivElement;
    //mobile menu toggle
    mobileMenuBtnM.addEventListener('click', (e) => {
        settingsScreenMobileM.classList.toggle('hidden');
    });

    closeMobileMenuM.addEventListener('click', (e) => {
        settingsScreenMobileM.classList.toggle('hidden');
    });

    //sliders inputs
    numbersQuantitySliders.forEach(slider => {
        slider.max = Math.floor(screenObj.width / 3).toString();
        slider.value = screenObj.numObjects.length.toString();

        slider.addEventListener('input', (e) => {
            createDivs(Number(slider.value), screenObj);
            mainScreen.innerHTML = '';
            screenObj.numObjects.forEach( (o) => {
                document.getElementById('main-screen').appendChild(o);
            });

            numbersQuantityVals.forEach(par => {
                par.innerText = slider.value;
            });
        });
    });

    //default quantity
    numbersQuantityVals.forEach(par => {
        par.innerText = screenObj.numObjects.length.toString();
    });

    delaySliders.forEach(slider => {
        slider.addEventListener('input', (e) => {
            delayValues.forEach(par => {
                par.innerText = slider.value;
                screenObj.delay = Number(slider.value);
            });
        });
    });

    //sorting types buttons
    const sortingTypeBtns = document.querySelectorAll<HTMLButtonElement>('.sort-type-btn');

    sortingTypeBtns.forEach(button => {
        button.addEventListener('click', (e) => {
            screenObj.sortType = button.attributes.getNamedItem('data').value;
            button.classList.toggle('picked');
            sortingTypeBtns.forEach(btn => {
                if (btn !== button) btn.classList.remove('picked');
            });
        });
    });

    //sort start button
    const sortStartBtns = document.querySelectorAll<HTMLButtonElement>('.sort-btn');

    sortStartBtns.forEach(button => {
        button.addEventListener('click', async (e) => {
            //button.disabled = true;
            
            numbersQuantitySliders.forEach(slider => {
                slider.disabled = true;
            });

            delaySliders.forEach(slider => {
                slider.disabled = true;
            });
            
            sortingTypeBtns.forEach(button => {
                button.disabled = true;
            });

            if(button.innerText === 'SORT') await sortFunction(screenObj);

            button.disabled = false;

            numbersQuantitySliders.forEach(slider => {
                slider.disabled = false;
            });

            delaySliders.forEach(slider => {
                slider.disabled = false;
            });

            sortingTypeBtns.forEach(button => {
                button.disabled = false;
            });
        });
    });

    const modeToggler = document.getElementById('mode-toggler') as HTMLFontElement;

    modeToggler.addEventListener('click', e => {
        modeToggler.innerHTML = '';
        changeMode();
    });
}