// Питання та відповіді
const ques = [
    {
        que: "Яка столиця України?",
        ch: ["Київ", "Львів", "Харків", "Одеса"],
        corAns: 0
    },
    {
        que: "Що означає скорочення 'CSS'?",
        ch: ["Creative Style System", "Computer Style Solutions", "Coded Style Symbols", "Cascading Style Sheets"],
        corAns : 3
    },
    {
        que: "Скільки планет в Сонячній системі?",
        ch: ["7", "8", "9", "10"],
        corAns: 1
    },
    {
        que: "Який елемент HTML використовується для створення заголовків?",
        ch: ["<p>", "<div>", "<h1>", "<span>"],
        corAns: 2
    },
    {
        que: "Який метод HTTP використовується для отримання даних з сервера?",
        ch: ["POST", "GET", "PUT", "DELETE"],
        corAns: 1
    },
];
let curQue = 0;
let sc = 0;
const queElement = document.getElementById("que");
const chElement = document.getElementById("ch");
const resElement = document.getElementById("res");
const form = document.getElementById("qu-form");
const nexButton = document.getElementById("nex-btn");
const resButton = document.getElementById("res-btn");
// Відображення питання та варіантів відповідей
function showQue() {
    const que = ques[curQue];
    queElement.textContent = que.que;
    chElement.innerHTML = "";
    que.ch.forEach((ch, index) => {
        const li = document.createElement("li");
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "an";
        radio.value = index;
        li.appendChild(radio);
        li.appendChild(document.createTextNode(ch));
        chElement.appendChild(li);
    });
}
// Обробка подання форми
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const selAn = Number(form.an.value);
    const que = ques[curQue];
    if (selAn === que.corAns) {
        sc = sc + 1;
    }
    form.style.display = "none";
    resElement.textContent = `Ваш результат: ${sc}/${ques.length}`;
    if (curQue === ques.length - 1) {
        nexButton.style.display = "none";
    } else {
        nexButton.style.display = "block";
    }
});
// Перехід до наступного питання
nexButton.addEventListener("click", () => {
    form.reset();
    form.style.display = "block";
    resElement.textContent = "";
    curQue = curQue + 1;
    showQue();
    nexButton.style.display = "none";
});
// Обробка натискання кнопки для проходження вікторини заново
resButton.addEventListener("click", () => {
    curQue = 0;
    sc = 0;
    form.style.display = "block";
    resElement.textContent = "";
    showQue();
    nexButton.style.display = "none";
});
// Запуск вікторини
showQue();