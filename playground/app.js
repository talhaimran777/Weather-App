// My app key to access to the weather data
const apiKey = 'DNIYlR9kBJZDZZy0TYGXh0nULOsdhOzO';

let city = 'lahore';

const resourse = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${city}`;

// node-fetch
const fetch = require('node-fetch');

// getData asynchrounous function

let getLocationKey = async ()=>{
    // fetch(resourse)
    // .then((response)=>{
    //     response.json()
    //     .then((data)=>{
    //         let cityKey = data[0].Key;

    //         let resourseForCity = `http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${apiKey}`;
            
    //         fetch(resourseForCity)
    //         .then((response)=>{
    //             response.json()
    //             .then((data)=>{
    //                 console.log(data);
    //             })
    //         })
    //     })
    // })

    // Implementing a better way of writting a fetch function;

    let response = await fetch(resourse);

    if(response.status !== 200){
        throw new Error('Invalid Resource!');
    }else{
        let data = await response.json();
        return data[0].Key;
    }  
}

let getCurrentConditions = async (key)=>{
    let locationKey = key;
    console.log('Searched Location Key: ', locationKey);
    let resourseForCityConditions = `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}`;

    let response = await fetch(resourseForCityConditions);
    let data = await response.json();
    return data;
}

getLocationKey()
.then((key)=>{
    getCurrentConditions(key).
    then((currentConditions)=>{
        console.log('Weather Condition: ', currentConditions[0].WeatherText);
        console.log('Temperature: ', currentConditions[0].Temperature.Metric.Value, currentConditions[0].Temperature.Metric.Unit);
    });
});