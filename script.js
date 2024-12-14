const surprises = [
    "🎈 You just won a lifetime supply of confetti! 🎉",
    "🦄 A unicorn just danced by! 🦄",
    "🍕 Pizza is now the official currency of the world! 🍕",
    "🎩 A magician just pulled a rabbit out of your hat! 🐇",
    "🌈 Rainbows are now made of candy! 🍬",
];

document.getElementById("surprise-btn").addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * surprises.length);
    const surpriseMessage = surprises[randomIndex];
    const display = document.getElementById("surprise-display");
    display.innerText = surpriseMessage;
    display.style.display = "block";
    display.style.animation = "pop 0.5s ease-in-out";
    setTimeout(() => {
        display.style.animation = "";
    }, 500);
});