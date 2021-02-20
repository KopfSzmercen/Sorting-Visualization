import type { screenObjInterface } from '../interfaces';

function sleep(ms: number){
    return new Promise(resolve => setTimeout(resolve, ms));
}

const redraw = (screenObj: screenObjInterface, mainScren: HTMLDivElement) => {
    mainScren.innerHTML = '';

    screenObj.numObjects.forEach(o => {
        mainScren.insertAdjacentElement('afterbegin',o);
    });
};

export const bubbleSort = async (screenObj: screenObjInterface, stopBtns: NodeListOf<HTMLButtonElement>) => {
    const mainScreen = document.getElementById('main-screen') as HTMLDivElement;
    let stopSort: boolean = false;

    stopBtns.forEach(b => {
        b.addEventListener('click', e => {
            stopSort = true;
            return true;
        });
    });
    
    for (let i = screenObj.numObjects.length - 1; i >= 0 && !stopSort; i--){
        let toCompare: HTMLDivElement = screenObj.numObjects[i];
        screenObj.numObjects[i].style.background = '#FF0000';
        
        for (let j = i - 1; j >= 0 && !stopSort; j--){
            let check: HTMLDivElement = screenObj.numObjects[j];
            check.style.background = '#FF0000';

            if (check.clientHeight < toCompare.clientHeight){
                const temp: number = check.clientHeight;
                check.style.height = `${toCompare.clientHeight.toString()}px`;
                toCompare.style.height = `${temp.toString()}px`;
            }
            redraw(screenObj, mainScreen);
            await sleep(screenObj.delay);
            check.style.background = 'white';
        }
        screenObj.numObjects[i].style.background = 'white';
    }

    return true;
};