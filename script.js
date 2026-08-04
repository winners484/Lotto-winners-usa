function draw() {
    let s = new Set();

    while (s.size < 5) {
        s.add(Math.floor(Math.random() * 90) + 1);
    }

    document.getElementById("o").textContent =
        "Winning Numbers: " +
        [...s].sort((a, b) => a - b).join(", ") +
        " | Demo Jackpot: $450,000,000";
}
