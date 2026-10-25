let score = 0;
const scoreDisplay = document.getElementById('score');

function createCoin() {
    const coin = document.createElement('div');
    coin.classList.add('coin');
    coin.innerText = '$';

    const randomX = Math.random() * (window.innerWidth - 40);
    coin.style.left = randomX + 'px';
    
    let posY = -50;
    coin.style.top = posY + 'px';

    document.body.appendChild(coin);

    const speed = 2 + Math.random() * 3;

    function fall() {
        posY += speed;
        coin.style.top = posY + 'px';

        if (posY > window.innerHeight) {
            coin.remove();
        } else {
            requestAnimationFrame(fall);
        }
    }
    requestAnimationFrame(fall);

    coin.addEventListener('click', () => {
        score++;
        scoreDisplay.innerText = score;
        coin.remove();
    });
}

setInterval(createCoin, 800);
