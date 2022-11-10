'use strict';

const input = document.querySelector('input');
const parag = document.querySelector('p');

const debonce = (func, time) => {
    let timeout;

    return () =>{
        clearTimeout(timeout);
        timeout = setTimeout(func, time);
    };
};

const getValue = () => {
    parag.textContent = input.value;
};

input.addEventListener('input', debonce(getValue, 300));
