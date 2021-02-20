import { handleUserInteraction } from './interaction';
import type { screenObjInterface } from '../screen/interfaces';
import { scrollTrigger } from './scroll';


export const mainInteraction = (screenObj: screenObjInterface) =>{
    handleUserInteraction(screenObj);
    scrollTrigger();
}