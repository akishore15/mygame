document.addEventListener("DOMContentLoaded", () => {
    const player = document.getElementById("player");
    const beast = document.getElementById("beast");
    const gameContainer = document.getElementById("gameContainer");
    let playerPosition = { top: 0, left: 0 };
    let beastPosition = { top: 550, left: 750 };

    document.addEventListener("keydown", (event) => {
        switch (event.key) {
            case "ArrowUp":
                playerPosition.top -= 10;
                break;
            case "ArrowDown":
                playerPosition.top += 10;
                break;
            case "ArrowLeft":
                playerPosition.left -= 10;
                break;
            case "ArrowRight":
                playerPosition.left += 10;
                break;
        }
        updatePosition(player, playerPosition);
        checkCollision();
    });

    function updatePosition(element, position) {
        element.style.top = `${position.top}px`;
        element.style.left = `${position.left}px`;
    }

    function checkCollision() {
        if (
            playerPosition.top < beastPosition.top + 50 &&
            playerPosition.top + 50 > beastPosition.top &&
            playerPosition.left < beastPosition.left + 50 &&
            playerPosition.left + 50 > beastPosition.left
        ) {
            alert("You were caught by the beast! Restarting...");
            resetGame();
        }
    }

    function resetGame() {
        playerPosition = { top: 0, left: 0 };
        updatePosition(player, playerPosition);
    }

    updatePosition(player, playerPosition);
    updatePosition(beast, beastPosition);
});
