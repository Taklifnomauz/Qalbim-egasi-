document.addEventListener('DOMContentLoaded', () => {
  const screens = [...document.querySelectorAll('.screen')];
  const progress = document.getElementById('progressBar');
  const music = document.getElementById('bgMusic');
  const musicBtn = document.getElementById('musicBtn');
  let current = 0;

  function showScreen(index) {
    current = Math.max(0, Math.min(index, screens.length - 1));
    screens.forEach((screen, i) => screen.classList.toggle('active', i === current));
    progress.style.width = `${((current + 1) / screens.length) * 100}%`;
  }

  document.querySelectorAll('.next-btn').forEach(btn => btn.addEventListener('click', () => showScreen(current + 1)));
  document.querySelectorAll('.prev-btn').forEach(btn => btn.addEventListener('click', () => showScreen(current - 1)));
  document.querySelector('.restart-btn')?.addEventListener('click', () => showScreen(0));

  musicBtn.addEventListener('click', async () => {
    if (music.paused) {
      try {
        await music.play();
        musicBtn.classList.add('playing');
        musicBtn.textContent = 'Ⅱ';
      } catch (err) {
        alert('Musiqa topilmadi. music.mp3 faylini index.html bilan bir papkaga joylang.');
      }
    } else {
      music.pause();
      musicBtn.classList.remove('playing');
      musicBtn.textContent = '♪';
    }
  });

  showScreen(0);
});
