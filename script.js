
const par = document.querySelectorAll('p');

let dayNow = new Date();
let dayNewYear = new Date(`31 december ${dayNow.getFullYear()}`).getTime();
const formatter = new Intl.NumberFormat('ru', { style: 'unit', unit: 'day', unitDisplay: 'long' });

const getWelcome = () => {
    switch (true) {
        case (dayNow.getHours() > 4 && dayNow.getHours() < 12):
            return 'Доброе утро';
        case (dayNow.getHours() >= 12 && dayNow.getHours() < 16):
            return 'Добрый день';
        case (dayNow.getHours() >= 16 && dayNow.getHours() < 20):
            return 'Добрый вечер';
        case (dayNow.getHours() >= 20 && dayNow.getHours() <= 4):
            return 'Доброй ночи';
    }

};

const getTime = () => {
    dayNow = new Date();
    return dayNow.toLocaleTimeString('en');
};

const dayToNewYear = () => {
    return Math.floor(((dayNewYear - dayNow.getTime()) / 1000) / 60 / 60 / 24);
};




par[0].textContent = getWelcome();
par[1].textContent = `Сегодня: ${dayNow.toLocaleDateString('ru', { weekday: 'long' })}`;
par[2].textContent = `Текущее время: ${getTime()}`;
par[3].textContent = `До нового года осталось ${formatter.format(dayToNewYear())}`;

setInterval(() => {
    par[2].textContent = `Текущее время: ${getTime()}`;
}, 1000);

