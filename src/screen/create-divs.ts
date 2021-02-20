import { screenObj } from "./index";

interface screenObjInterface {
    width: number;
    height: number;
    running: boolean;
    numObjects: HTMLDivElement[];
}

export const createDivs = (amount: number, screenObject: screenObjInterface) => {
    screenObj.numObjects = [];
    if ( (amount >= 0 || amount > screenObj.numObjects.length) && amount < Math.floor(screenObj.width / 2)){
        for (let i = 0; i < amount; i++){
            screenObject.numObjects.push(create(screenObject.height - 40));
        }
    }

    if (screenObj.numObjects.length > Math.floor(screenObj.width / 2) || screenObj.numObjects.length > amount){
        while (screenObj.numObjects.length > amount) screenObj.numObjects.pop();
    }

};


function create(maxHeight: number): HTMLDivElement{

    const div: HTMLDivElement = document.createElement('div');
    div.style.width = `20px`;
    div.style.height = `${(Math.floor(Math.random()*maxHeight + 10)).toString()}px`;
    div.style.background = `#FFFF`;

    return div;
}