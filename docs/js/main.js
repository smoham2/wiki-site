document.getElementById("confettiBtn").addEventListener("click", function() {
  for (let i = 0; i < 150; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
    confetti.style.backgroundColor =
      ["#f7c9d4", "#d8b4e2", "#b48ede", "#fce1ec", "#e4c6f7"][Math.floor(Math.random() * 5)];
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 5000);
  }
});

