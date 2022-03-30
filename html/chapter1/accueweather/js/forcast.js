var url = "https://api.openweathermap.org/data/2.5/weather"
url += "?appid=a24eefe49677a710a52a91a256689ddf"
url += "&units=metric";
url += "&lang=kr";
url += "&q=";


// 현재 날씨의 모든 정보를 얻어옴
function getCurrentWeather(city) {
    var dataObj;
    var openWeatherAPI = url;

    $.ajax({
        type: "GET",
        url: openWeatherAPI += city,
        dataType: "json",
        async: false, /* 결과 데이터를 리턴시키기 위해 동기방식으로 변경 */
        success: function(data) {
            dataObj = data;
            console.log(dataObj);
        },
        error: function(req, status, err) {
            console.log("code: ",req.state);
            console.log("message: ", req.responseText);
            console.log("errer: ",err);
        }
    });

    return dataObj;
}

// 현재 날씨의 온도 얻어오기
function getCurrentTemp(city) {
    var temp ={};
    var openWeatherAPI = url;

    $.ajax({
        type: "GET",
        url: openWeatherAPI += city,
        dataType: "json",
        async: false, /* 결과 데이터를 리턴시키기 위해 동기방식으로 변경 */
        success: function(data) {
            temp.celsius = Math.floor(data.main.temp); //소수점 버림
            temp.icon = data.weather[0].icon;
        },
        error: function(req, status, err) {
            console.log("code: ",req.state);
            console.log("message: ", req.responseText);
            console.log("errer: ",err);
        }
    });

    return temp;
}