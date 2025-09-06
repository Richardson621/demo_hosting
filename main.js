function showScreen(screenId) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.classList.add('hidden');
    });
    const toShow = document.getElementById(screenId);
    if (toShow) {
        toShow.classList.remove('hidden');
        toShow.style.opacity = 0;
        setTimeout(() => {
            toShow.style.opacity = 1;
        }, 50);
    }
}

window.onload = () => {
    showScreen('webHome');
};