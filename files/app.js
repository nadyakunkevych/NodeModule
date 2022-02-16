// 1. Створити основну папку (main), в яку покласти дві інші папки:
// перша - online, друга - inPerson

const path = require('path')

const fs = require('fs')

fs.mkdir(path.join(__dirname, 'main'), (err)=>{
    if (err) {
        console.log(err);
        throw err;
    }
})

fs.mkdir(path.join(__dirname, 'main', 'online'), (err)=>{
    if (err) {
        console.log(err);
        throw err;
    }
})

fs.mkdir(path.join(__dirname, 'main', 'inPerson'), (err)=>{
    if (err) {
        console.log(err);
        throw err;
    }
})

// 2. Потім створити в вашому головному файлі (для прикладу app.js) два масиви з обєктами
// user ({. name: "Andrii", age: 22, city: "Lviv" }),
// відповідно перший - onlineUsers, другий - inPersonUsers;

// 3. і створити файли txt в папках (online, inPerson),
// в яких як дату покласти юзерів з ваших масивів,
// але щоб ваш файл виглядав як NAME: ім'я з обєкту і т.д і всі пункти з нового рядка.

let onlineUsers = [
    { name: 'Andrii', age: 22, city: 'Lviv' },
    { name: 'Oleg', age: 28, city: 'Berlin' },
    { name: 'Anna', age: 20, city: 'Ternopil' }
];

for (let i = 0; i < onlineUsers.length; i++) {
    for (const onlineUser in onlineUsers [i]) {

        fs.writeFile(path.join(__dirname, 'main', 'online', 'file.txt'),
            `${onlineUser} : ${onlineUsers[i][onlineUser]}\n`, {flag: 'a'}, (err) => {
            if (err) {
                console.log(err);
                throw err;
            }
        })
    }


    let inPersonUsers = [
        {name: 'Max', age: 34, city: 'Paris'},
        {name: 'Julia', age: 30, city: 'Lviv'},
        {name: 'Nazar', age: 18, city: 'Lutsk'}
    ];


    for (let j = 0; j < inPersonUsers.length; j++) {
            const inPersonUser = inPersonUsers[j];

            fs.writeFile(path.join(__dirname, 'main', 'inPerson', 'file.txt'), `${inPersonUser}: ${inPersonUsers[i][inPersonUser]}\n`,
                {flag: 'a'},
                (err) => {
                if (err) {
                    console.log(err);
                    throw err;
                }
            })
        }
}
