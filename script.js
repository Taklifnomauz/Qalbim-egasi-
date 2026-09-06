document.addEventListener("DOMContentLoaded", () => {
    const music = document.getElementById("bgMusic");
    const musicBtn = document.getElementById("musicBtn");
    const musicCard = document.querySelector(".music-card");

    if (!music || !musicBtn || !musicCard) return;

    musicBtn.addEventListener("click", async () => {
        try {
            if (music.paused) {
                await music.play();
                musicBtn.textContent = "❚❚";
                musicCard.classList.add("playing");
            } else {
                music.pause();
                musicBtn.textContent = "▶";
                musicCard.classList.remove("playing");
            }
        } catch (error) {
            console.error("Musiqa ishga tushmadi:", error);
            alert("Musiqa fayli topilmadi. music.mp3 faylini sayt papkasiga joylang.");
        }
    });

    music.addEventListener("ended", () => {
        musicBtn.textContent = "▶";
        musicCard.classList.remove("playing");
    });
});
