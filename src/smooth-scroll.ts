
export const smoothScroll = () => {

    const scrollButton: HTMLElement = document.getElementById('scroll-button')!;

    scrollButton.addEventListener('click', (e) => {
        
        const secondSection: HTMLElement = document.getElementById('second-section');
        const offsetTop: number = secondSection.offsetTop;

        scroll({
            top: offsetTop,
            behavior: "smooth"
        });
    });
}