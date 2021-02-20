import type { screenObjInterface } from '../interfaces';

function sleep(ms: number){
    return new Promise(resolve => setTimeout(resolve, ms));
}

const redraw = (screenObj: screenObjInterface, mainScren: HTMLDivElement) => {
    mainScren.innerHTML = '';

    screenObj.numObjects.forEach(o => {
        mainScren.insertAdjacentElement('beforeend', o);
    });
};

export const insertionSort = async (screenObj: screenObjInterface, stopBtns: NodeListOf<HTMLButtonElement>) => {
    const mainScreen = document.getElementById('main-screen') as HTMLDivElement;
    let stopSort: boolean = false;

    stopBtns.forEach(b => {
        b.addEventListener('click', e => {
            stopSort = true;
            return true;
        });
    });

    for (let i = 1; i < screenObj.numObjects.length && !stopSort; i++){
        const key = screenObj.numObjects[i].clientHeight;
        let j = i - 1;

        const tempArr: number[] = [];

        screenObj.numObjects.forEach(o => {
            tempArr.push(o.clientHeight);
        });

        while (j >= 0 && key < screenObj.numObjects[j].clientHeight && !stopSort){
            screenObj.numObjects[j+1].style.background = 'red';
            screenObj.numObjects[j+1].style.height = screenObj.numObjects[j].style.height;
            j-= 1;
            redraw(screenObj, mainScreen);
            await sleep(screenObj.delay);
            screenObj.numObjects[j+2].style.background = 'white';
        }
        screenObj.numObjects[j + 1].style.height = `${key.toString()}px`;
        await sleep(screenObj.delay);
        redraw(screenObj, mainScreen);
    }
    return true;
};