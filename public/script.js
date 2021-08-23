



const city_name = document.getElementById('city-name-enter');
const submitbtn = document.getElementById('submit-btn');
var current_date = new Date();
var current_Date = document.getElementById('current_date');
var current_Day = document.getElementById('current_day');
var current_Month = document.getElementById('current_month');
current_Date.innerText = current_date.getUTCDate();

current_Month.innerText = current_date.getUTCMonth() + 1;
var day = current_date.getUTCDay();

switch (day) {
    case 1:
        current_Day.innerText = "monday";
        break;
    case 2:
        current_Day.innerText = "tuesday";
        break;
    case 3:
        current_Day.innerText = "wednesday";
        break;
    case 4:
        current_Day.innerText = "thusday";
        break;
    case 5:
        current_Day.innerText = "friday";
        break;
    case 6:
        current_Day.innerText = "saturday";
        break;
    case 7:
        current_Day.innerText = "sunday";
        break;
};
const getinfo = (event) => {
    event.preventDefault();
    var temp_info = document.getElementById('temp-info');
    temp_info.style.display = "block";

    var default_message = document.getElementById('default_mes');
    default_message.style.display = "none";

    var enter_city_name = document.getElementById('city-name-enter');
    if (enter_city_name.value == "") {
        document.getElementById('city-name-out').innerHTML = "plese enter city";
    } else {
        var city = enter_city_name.value;
        try {
            const url = `api.openweathermap.org/data/2.5/weather?q="${city}"&units=metric&appid=a7a992dc9f4dcfc0ab4da1f989aafa4e`
            const response = await fecth(url);
            console.log(response);
        } catch {
            document.getElementById('city-name-out').innerHTML = "plese enter correct city name";
        }
    }

}
submitbtn.addEventListener('click', getinfo);

