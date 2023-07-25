const avatar = document.querySelectorAll('.avatar');
const heart = document.querySelector('.heart-flip');

avatar.forEach((f, i) => f.addEventListener('mouseenter', function () {
    avatar.forEach(e => {
        e.classList.remove('flip');
    });
    this.classList.add('flip');
    if (i == 1) {
        heart.classList.add('flip');
    } else {
        heart.classList.remove('flip');
    }
}));


window.addEventListener('scroll', function () {
    let scrolled = window.scrollY;
    let element = document.querySelectorAll('.section-title');
    element.forEach(f => {
        f.style.backgroundPosition = 'center ' + -(scrolled * 0.5) + 'px';
    })
});

const inputDate = new Date('2022-10-17');
const today = new Date();

const inputYear = inputDate.getFullYear();
const inputMonth = inputDate.getMonth();
const inputDay = inputDate.getDate();
const todayYear = today.getFullYear();
const todayMonth = today.getMonth();
const todayDay = today.getDate();

let diffYears = todayYear - inputYear;
let diffMonths = (diffYears * 12) + (todayMonth - inputMonth);
let diffDays = todayDay - inputDay;
if (diffDays < 0) {
    let lastMonth = new Date(todayYear, todayMonth, 0).getDate();
    diffDays += lastMonth;
    diffMonths--;
}

let output = '';
if (diffMonths > 0) {
    output += diffMonths + ' months ';
}
if (diffDays === 1) {
    output += '1 day';
} else if (diffDays === 0) {
    output;
}
else {
    output += diffDays + ' days';
}

document.addEventListener('DOMContentLoaded', function () {
    let countHtml = document.querySelector('.count');
    countHtml.innerHTML = output;
});

const moveToTop = document.querySelector(".moveToTop");
const moveToBottom = document.querySelector('.moveToBottom');

window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
        moveToTop.style.display = "flex";
        moveToBottom.style.display = "none";
    } else {
        moveToTop.style.display = "none";
        moveToBottom.style.display = "flex";
    }
});

const descriptionLink = document.querySelector('.description p a');

descriptionLink.addEventListener('click', function (e) {
    e.preventDefault();
    const herf = this.getAttribute('href');
    window.open(herf, '_blank');
});