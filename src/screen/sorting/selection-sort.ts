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


export const selectionSort = async (screenObj: screenObjInterface, stopBtns: NodeListOf<HTMLButtonElement>) => {
    const mainScreen = document.getElementById('main-screen') as HTMLDivElement;

    let stopSort: boolean = false;

    stopBtns.forEach(b => {
        b.addEventListener('click', e => {
            stopSort = true;
            return true;
        });
    });

    for (let i = 0; i < screenObj.numObjects.length && !stopSort; i++){
        let index: number = i;
        screenObj.numObjects[i].style.background = 'red';
        redraw(screenObj, mainScreen);
        await sleep(screenObj.delay);

        for (let j = i + 1; j < screenObj.numObjects.length && !stopSort; j++){
            if (screenObj.numObjects[j].clientHeight < screenObj.numObjects[index].clientHeight) index = j;
            screenObj.numObjects[j].style.background = 'red';
            redraw(screenObj, mainScreen);
            await sleep(5);
            screenObj.numObjects[j].style.background = 'white';
        }
        const temp = `${screenObj.numObjects[i].clientHeight.toString()}px`;
        screenObj.numObjects[i].style.height = `${screenObj.numObjects[index].clientHeight.toString()}px`;
        screenObj.numObjects[index].style.height = temp;

        screenObj.numObjects[i].style.background = 'white';
        redraw(screenObj, mainScreen);
        await sleep(screenObj.delay);
    }
    return true;
};