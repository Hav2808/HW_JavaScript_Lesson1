document.write('Hello, world!');
console.log('Hello, developers!');

while (true) {
// Задание 1
    let meanNumber = Math.floor(Math.random() * 1000);
    console.log(meanNumber);
    let userNumber

    do {
        userNumber = window.prompt("Загадайте число от 0 до 1000)");
    }
    while (isNaN(userNumber) || userNumber === "" ) 
    if (userNumber === null) {
        break;
    }
    console.log(userNumber);
    // Сравниваем
    if (userNumber == meanNumber) {
        alert("Вам ну очень повезло. Вы угадали")
    } else {
        alert("Увы, Вы не угадали")
    }
}