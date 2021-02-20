import './style/main.scss';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import { smoothScroll } from './smooth-scroll';
import { screenObj } from './screen/index';
import { mainInteraction } from './interaction/index';

screenObj.numObjects.forEach( (o) => {
    document.getElementById('main-screen').appendChild(o);
});

smoothScroll();
mainInteraction(screenObj);


