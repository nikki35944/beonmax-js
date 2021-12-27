window.addEventListener('DOMContentLoaded', function () {

    'use strict';
    //Объявляем переменные селекторы для пунктов меню и контента табов
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    //скрываем контент табы на странице
    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    //Функция для удуления css класса hide и добавления show
    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    // При клике на кнопки меню убираем контент который показывается
    // по умолчанию и выводим тот, по которому кликнули

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });


//    Timer
    let deadline = '2021-12-25';

    function getTimeRemaining(endTime) {
        let t = Date.parse(endTime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)));

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds,
        };
    }


    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);


            (t.hours.toString().length < 2) ?
                hours.textContent = '0' + t.hours : hours.textContent = t.hours;
            (t.minutes.toString().length < 2) ?
                minutes.textContent = '0' + t.minutes : minutes.textContent = t.minutes;
            (t.seconds.toString().length < 2) ?
                seconds.textContent = '0' + t.seconds : seconds.textContent = t.seconds;


            if (t.total <= 0 ) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }

    setClock('timer', deadline);


    // Модальное окно

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        tabsMore = document.querySelectorAll('.description-btn');

    more.addEventListener('click', function () {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    for (let button of tabsMore) {
        button.addEventListener('click', function () {
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });
    }

    close.addEventListener('click', function () {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    class Options
    {

        constructor(height, width, bg, fontSize, textAlign) {
            this.height = height;
            this.width = width;
            this.bg = bg;
            this.fontSize = fontSize;
            this.textAlign = textAlign;
        }

        createDiv() {
            let elem = document.createElement('div');
            document.body.appendChild(elem);
            let params = `height:${this.height}px;width:${this.width}px;background-color:${this.bg};font-size:${this.fontSize}px;text-align:${this.textAlign};`;
            elem.style.cssText = params;
        }
    }
    let optionOne = new Options(300, 500, "blue", 11, "right");
    optionOne.createDiv();

});