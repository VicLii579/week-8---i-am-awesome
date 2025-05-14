const button = document.querySelector('button');
const resultBox = document.querySelector('.result');

button.addEventListener('click', () => {
    resultBox.innerHTML = '';

    for (let i = 1; i <= 10; i++) {
        resultBox.innerHTML += `${i}. I am awesome!<br>`;
    }
});
