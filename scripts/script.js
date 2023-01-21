const MENU = document.getElementById('menu');
const BASICS = document.getElementById('basics');//блок штмл привязал к константе
const STANDARD = document.getElementById('standard');
const CARE = document.getElementById('care');
const ONBASICS = document.getElementById('on-basics');
const ONSTANDARD = document.getElementById('on-standard');
const ONCARE = document.getElementById('on-care');

MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('li>a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});

BASICS.addEventListener('click', () => { //слушаю клик в длоке через ид который привязан к константе
    document.getElementById('ul-block').classList.add('hidden');// добавил класс с дисплей нан
    document.getElementById('on-basics').classList.remove('open-basics');// убрал клас с нан = изменил кнопку
});
STANDARD.addEventListener('click', () => {
    document.getElementById('ul-block').classList.add('hidden');
    document.getElementById('on-standard').classList.remove('open-standard');
});
CARE.addEventListener('click', () => {
    document.getElementById('ul-block').classList.add('hidden');
    document.getElementById('on-care').classList.remove('open-care');
});
ONBASICS.addEventListener('click', () => {//клик в том же месте но по открывшемуся там новому блоку
    document.getElementById('on-basics').classList.add('open-basics');//меняю все назад
    document.getElementById('ul-block').classList.remove('hidden');
});
ONSTANDARD.addEventListener('click', () => {
    document.getElementById('on-standard').classList.add('open-standard');
    document.getElementById('ul-block').classList.remove('hidden');
});
ONCARE.addEventListener('click', () => {
    document.getElementById('on-care').classList.add('open-care');
    document.getElementById('ul-block').classList.remove('hidden');
});