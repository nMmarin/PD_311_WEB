// JavaScript source code
//alert("Date & Time");
let current_time = new Date();
let date_and_time = document.getElementById("date-and-time");
date_and_time.innerHTML =`getDate():\t${current_time.getDate()};<br>`;
date_and_time.append(`getTime():\t${current_time.getTime()};<br>`);
date_and_time.append(`getDay():\t${(new Date(2025, 03 - 1, 16)).toLocaleString("default", { weekday: "long" })};`);
//const WEEK = ("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",);

function tick_timer()
{
    let current_time = new Date();
    if (document.getElementById("show-date").checked)
    {
        let yyyy = current_time.getFullYear();
        let MM = checkNumber(current_time.getMonth() + 1);
        let DD = checkNumber(current_time.getDate());
        let date_string = `${yyyy}.${MM}.${DD}`;
        document.getElementById("date").innerHTML = date_string;
    }
    else
    {
        document.getElementById("date").innerHTML="";
    }

    document.getElementById("weekday").innerHTML =
        document.getElementById("show-weekday").checked ? current_time.toLocaleString("ru-ru", { weekday: "long" }) : "";

    let hh = checkNumber(current_time.getHours());
    let mm = checkNumber(current_time.getMinutes());
    let ss = checkNumber(current_time.getSeconds());

    let time_string = `${hh}.${mm}.${ss}`;
    document.getElementById("time").innerHTML = time_string;
    setTimeout(tick_timer,1000);    //setTimeout(), ������� �������� ��������� �� ������� � �������� � ������������� �������� ��������� ������� ���� ��������� ��������
}

function checkNumber(i)
{
    return i < 10 ? "0" + i : i;
}

//alert(current_time);
/* Date(); default constructor - ���������� ������� ���� � �����
 Date(string); 
 Date(milliseconds);
 Date(year);
 Date(year,month);
 Date(year,month,day);
 Date(year,month,day,hours);
 Date(year,month,day,hours,minutes);
 Date(year,month,day,hours,minutes,seconds);
 Date(year,month,day,hours,minutes,seconds,milliseconds);*/