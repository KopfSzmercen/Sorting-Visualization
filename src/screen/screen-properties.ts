const mainScreen = document.getElementById('main-screen') as HTMLDivElement;
const screenWidth: number = mainScreen.offsetWidth;
const screenHeight: number = mainScreen.offsetHeight;

interface screenPropObj {
    width: number;
    height: number;
}

export const screenProps: screenPropObj = {
    width: screenWidth,
    height: screenHeight
}