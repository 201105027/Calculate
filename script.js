alert('Привет я калькулятор, я умножаю любые числа но на 100')

let num = prompt('Выбери число')

for(let i = 1;i <=100;i++ ) {
    document.write(`${i} * ${num} = ${i * num}<br>`)
}
