import { bubbleSort } from './bubble-sort';
import { selectionSort } from './selection-sort';
import { insertionSort } from './insertion-sort';
import type { screenObjInterface } from '../interfaces';

export const sortFunction = async (screenObj: screenObjInterface) => {
    const stopBtn: NodeListOf<HTMLButtonElement> = document.querySelectorAll<HTMLButtonElement>('.sort-btn');
    
    stopBtn.forEach(b => {
        b.innerText= 'STOP';
    });

    switch(screenObj.sortType){
        case 'bubble': {
            await bubbleSort(screenObj, stopBtn);
            break;
        }
        case 'selection': {
            await selectionSort(screenObj, stopBtn);
            break
        }
        case 'insertion': {
            await insertionSort(screenObj, stopBtn);
            break
        }
    }

    stopBtn.forEach(b => {
        b.innerText= 'SORT';
    });
    return true;
};