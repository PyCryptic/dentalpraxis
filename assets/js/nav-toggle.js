// Mobile Menu Toggle
const mobileBtn = document.getElementById('mobile-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileBtn.onclick = () => {
    mobileMenu.classList.toggle('hidden');
};

// Mobile-Menü schließen, sobald ein Menüpunkt angeklickt wird
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Auto play slider
setInterval(() => {
    if (document.getElementById('view-home').classList.contains('active')) {
        moveSlider(currentIdx + 1);
    }
}, 8000);