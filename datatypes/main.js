// Задание A!
// - Создадим переменную, которая содержит строку;
// - Выведем значение этой переменной в alert;
// - Изменим значение переменной;
// - Результат снова выведем в консоль;

// let a = 'Hello world!';
// alert(a);
// a = 'Hello!';
// alert(a);

// Задание B!

// - Создадим шесть переменных, в каждой из которых будет один из шести типов данных;
// - Выводим их значение в alert;
// - Выводим объекты в консоль.

let num = 5,
    str = 'string',
    isChecked = true,
    name = null,
    city,
    animals = ['dog', 'cat', 'hen'];

// alert(num);
// alert(str);
// alert(isChecked);
// alert(name);
// alert(city);
console.log(animals);

// Задание C!
// - Вывести в консоль все типы данных переменных, созданных в задании B.

console.log(typeof num);
console.log(typeof str);
console.log(typeof isChecked);
console.log(typeof name);
console.log(typeof city);
console.log(typeof animals);

// Задание D!
// - Выводим окно prompt с вопросом о возрасте;
// - В зависимости от ответа выводим alert с текстом “поздравляем, вам n полных лет”;
// - Выводим окно alert с утверждением совершеннолетний пользователь или нет.

// let age = +prompt('Сколько вам полных лет?', '');
// alert(`поздравляем, вам ${age} полных лет`);
// if(age >= 18) {
//     alert(`вы совершеннолетний`);
// } else {
//     alert(`вы несовершеннолетний`);
// }
