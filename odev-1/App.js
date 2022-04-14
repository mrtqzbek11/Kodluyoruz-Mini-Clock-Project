// First HomeWork


let text1 = document.querySelector('.firstText');

let _name = prompt('Adınızı Giriniz');

text1.innerHTML = `Merhaba, ${_name}! Hoş Geldin!`;


let _date =  new Date();
let _days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi"
];


let satClock = () => {

    let _date =  new Date();
    let _days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi"
   ];

    let clockk = document.querySelector('.clock');

    let hours = _date.getHours();

    let minute = _date.getMinutes();

    let second = _date.getSeconds();

    clockk.innerHTML = ` ${hours}:${minute < 10 ? "0"+minute : minute }:${second < 10 ? "0"+second : second}, 
    <span class="days_css">${_days[_date.getDay()]}</span>`;

    setInterval(satClock,1000);
}


