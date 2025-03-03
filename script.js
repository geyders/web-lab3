// завдання 1
function task1() {
    let sum = 0;
    let i = 1;
    let a = 0;
    let b = 1;
    while (i <= 10) {
        sum += b;
        b = a + b;
        a = b - a;
        i++;
    }

    console.log("Завдання 1. Сума перших 10 чисел Фібоначчі: ", sum);
}

task1();

// завдання 2
function task2() {
    let sum = 0;
    let num = 1;

    for (let i = 1; i <= 1000; i++) {
        sum += num;
        num++;
    }
    console.log("Завдання 2. Сума нат. чисел від 1 до 1000: ", sum);
}

task2();

// завдання 3
function task3() {
    const num = parseInt(prompt("Введіть число від 1 до 7"));
    if (isNaN || num < 1 || num > 7) {
        alert("Введіть корректне значення(від 1 до 7)");
        return;
    }

    let day;

    switch (num) {
        case 1:
            day = "Понеділок";
            break;
        case 2:
            day = "Вівторок";
            break;
        case 3:
            day = "Середа";
            break;
        case 4:
            day = "Четвер";
            break;
        case 5:
            day = "П'ятниця";
            break;
        case 6:
            day = "Субота";
            break;
        case 7:
            day = "Неділя";
            break;
    }
    console.log(`Завдання 3. День тижня за номером ${num} це ${day}`);
}

task3();


// завдання 4
function task4(arr) {
    return arr.filter(str => str.length % 2 !== 0);
}
const words = ["aaa", "aabbs", "aabb"];
const result = task4(words);

console.log("Завдання 4.", result);


// завдання 5
function task5() {
    let arr = [1, 2, 3];
    return arr.map(num => num + 1);
}

console.log(`Завдання 5. Масив збільшений на 1: ${task5()}`);

// завдання 6
function task6(a, b) {
    return (a + b === 10 || Math.abs(a - b) === 10);
}

let a = parseInt(prompt("Введіть перше число"));
let b = parseInt(prompt("Введіть друге число"));

console.log(`Завдання 6. ${task6(a, b)}`);
