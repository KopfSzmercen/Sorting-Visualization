import { screenProps } from './screen-properties';
import { createDivs } from './create-divs';
import type { screenObjInterface } from './interfaces';

export const screenObj: screenObjInterface = {
    width: screenProps.width,
    height: screenProps.height,
    running: true,
    numObjects: [],
    sortType: 'bubble',
    delay: 1
}

//fill screen with default number of elements
createDivs(Math.floor(screenObj.width / 50), screenObj);
