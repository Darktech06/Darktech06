function increaseScore(id) {
    const input = document.getElementById(id);
    input.value = Number(input.value) + 1;
}

function decreaseScore(id) {
    const input = document.getElementById(id);
    input.value = Number(input.value) - 1;
}

let timer = null;

function startCountdown() {
    clearInterval(timer);
    const userTime = parseInt(document.getElementById("userTime").value, 10);
    let timeLeft = isNaN(userTime) ? 60 : userTime;
    const countdownElement = document.getElementById("countdown");
    countdownElement.textContent = timeLeft;

    timer = setInterval(() => {
        timeLeft --;
        countdownElement.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            countdownElement.textContent = "Temps écoulé !";
            alert("Le temps est écoulé !");
        }
    }, 1000);
}

function stopCountdown() {
    const countdownElement = document.getElementById("countdown");
    clearInterval(timer);
    countdownElement.textContent = "Temps restant : " + timeLeft;
    
}