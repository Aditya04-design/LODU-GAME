document.addEventListener("DOMContentLoaded", () => {
    console.log("Ludo Game Loaded! 🎲");

    // Dice rolling functionality
    const rollDiceButton = document.createElement("button");
    rollDiceButton.innerText = "🎲 Roll Dice";
    rollDiceButton.style.padding = "10px 20px";
    rollDiceButton.style.fontSize = "18px";
    rollDiceButton.style.marginTop = "20px";
    document.body.appendChild(rollDiceButton);

    const diceResult = document.createElement("p");
    diceResult.innerText = "Roll: 0";
    diceResult.style.fontSize = "20px";
    document.body.appendChild(diceResult);

    rollDiceButton.addEventListener("click", () => {
        let diceRoll = Math.floor(Math.random() * 6) + 1; // Random 1-6
        diceResult.innerText = `Roll: ${diceRoll}`;
        console.log(`🎲 Dice Rolled: ${diceRoll}`);
    });

    // Token movement (Basic setup for now)
    const token = document.createElement("div");
    token.style.width = "40px";
    token.style.height = "40px";
    token.style.backgroundColor = "red";
    token.style.borderRadius = "50%";
    token.style.position = "absolute";
    token.style.top = "100px";
    token.style.left = "100px";
    document.body.appendChild(token);

    rollDiceButton.addEventListener("click", () => {
        let diceRoll = Math.floor(Math.random() * 6) + 1;
        let newPosition = parseInt(token.style.left) + diceRoll * 40;
        if (newPosition < 400) {
            token.style.left = `${newPosition}px`;
        }
    });
});
