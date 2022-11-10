const div = document.querySelector('div');
const daysWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

let dayNow = new Date();
let dayNewYear = new Date('31 december 2022').getTime();

const getWelcome = () => {
    switch (true) {
        case (dayNow.getHours() > 4 && dayNow.getHours() < 12):
            return 'Доброе утро';
        case (dayNow.getHours() >= 12 && dayNow.getHours() < 16):
            return 'Добрый день';
        case (dayNow.getHours() >= 16 && dayNow.getHours() < 20):
            return 'Добрый вечер';
        case (dayNow.getHours() >= 20):
            return 'Доброй ночи';
    }

};

const dayToNewYear = () => {
    return Math.floor(((dayNewYear - dayNow.getTime()) / 1000) / 60 / 60 / 24 );
};

div.innerHTML = `
<p>${getWelcome()}</p>

<p>Сегодня: ${daysWeek[dayNow.getDay() - 1]}</p>

<p>Текущее время: ${dayNow.toLocaleTimeString('en')}</p>

<p>До нового года осталось ${dayToNewYear()} дней</p>

`;