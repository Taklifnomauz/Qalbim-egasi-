document.addEventListener('DOMContentLoaded', () => {
    const body = document.getElementById('page-body');
    const introCard = document.getElementById('intro-card');
    const proposalCard = document.getElementById('proposal-card');
    const thanksCard = document.getElementById('thanks-card');
    const bgMusic = document.getElementById('bgMusic');

    const startBtn = document.getElementById('start-btn');
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');

    // 1-oynadan 2-oynaga o'tish
    if (startBtn) {
        startBtn.addEventListener('click', () => {
            introCard.classList.add('hidden');
            proposalCard.classList.remove('hidden');
            body.className = 'bg-state-2';

            if (bgMusic) {
                bgMusic.play().catch(error => {
                    console.log("Musiqani ijro etishda xatolik:", error);
                });
            }
        });
    }

    // "Yo'q" tugmasining qochishi
    function dodgeNoButton() {
        const maxOffset = 70;
        const randomX = (Math.random() - 0.5) * maxOffset * 2;
        const randomY = (Math.random() - 0.5) * maxOffset * 2;
        if (noBtn) {
            noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
        }
    }

    if (noBtn) {
        noBtn.addEventListener('mouseenter', dodgeNoButton);
        noBtn.addEventListener('touchstart', (e) => {
            e.preventDefault();
            dodgeNoButton();
        });
    }

    // "Taklifni qabul qilaman" bosilganda 3-oynaga o'tish
    if (yesBtn) {
        yesBtn.addEventListener('click', () => {
            proposalCard.classList.add('hidden');
            thanksCard.classList.remove('hidden');
            body.className = 'bg-state-3';

            if (typeof confetti === 'function') {
                confetti({
                    particleCount: 150,
                    spread: 80,
                    origin: { y: 0.6 },
                    colors: ['#f6ce3b', '#2f6fa8', '#e0ac2a', '#ffffff']
                });
            }
        });
    }
});
