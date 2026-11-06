const gift = document.getElementById("gift");
const openButton = document.getElementById("openGift");
const welcome = document.getElementById("welcome");
const surprise = document.getElementById("surprise");
const replay = document.getElementById("replay");

const starsContainer = document.getElementById("stars");
const heartsContainer = document.getElementById("hearts");

// CREATE BACKGROUND STARS
function createStars() {
    for (let i = 0; i < 100; i++) {
        const star = document.createElement("div");

        star.className = "star";
        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";

        const size = Math.random() * 3 + 1;
        star.style.width = size + "px";
        star.style.height = size + "px";

        star.style.animationDelay = Math.random() * 3 + "s";

        starsContainer.appendChild(star);
    }
}

// FLOATING HEARTS
function createHearts() {
    const emojis = ["💜", "💖", "✨", "💕", "🤍", "🌸"];

    const heart = document.createElement("span");

    heart.className = "heart";
    heart.textContent = emojis[
        Math.floor(Math.random() * emojis.length)
    ];

    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";

    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 6500);
}

// OPEN THE GIFT
function openTheGift() {

    openButton.disabled = true;
    openButton.textContent = "OPENING YOUR SURPRISE...";

    gift.classList.add("open");

    // Show congratulations after the gift animation
    setTimeout(() => {

        welcome.classList.add("hidden");
        surprise.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        // Launch celebration effects
        for (let i = 0; i < 30; i++) {
            setTimeout(createHearts, i * 120);
        }

    }, 1300);
}

// REPLAY EXPERIENCE
function replayExperience() {

    surprise.classList.add("hidden");
    welcome.classList.remove("hidden");

    gift.classList.remove("open");

    openButton.disabled = false;
    openButton.innerHTML = 'OPEN YOUR GIFT <span>✦</span>';

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// EVENT LISTENERS
openButton.addEventListener("click", openTheGift);
replay.addEventListener("click", replayExperience);

// START THE WEBSITE
createStars();

// Continuously create a few floating hearts
setInterval(createHearts, 1800);