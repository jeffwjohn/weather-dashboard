// fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=43fd1cdd770e5cf56daf2f9d5cdc1037')
// .then(response => response.json())
// .then(data => console.log(data));

// fetch('api.openweathermap.org/data/2.5/weather?q={city name}&appid=524901&APPID=43fd1cdd770e5cf56daf2f9d5cdc1037')
// .then(response => response.json())
// .then(data => console.log(data));

var citySearch = function () {
    fetch("http://api.openweathermap.org/data/2.5/weather?q=London&appid=43fd1cdd770e5cf56daf2f9d5cdc1037")
};

citySearch();

// http://api.openweathermap.org/data/2.5/weather?q=London&appid=43fd1cdd770e5cf56daf2f9d5cdc1037