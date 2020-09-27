// This file is for the dom manipulation


let form = document.querySelector('form');
let submittedValue = '';

let updateCity = (city) => {
    let textForCity = document.querySelector('#city');
    textForCity.textContent = city;
}

let updateWeatherCondition = (conditions) => {
    let textForCondition = document.querySelector('#condition');

   // console.log('Conditions: ', conditions);

   textForCondition.textContent = conditions[0].WeatherText;
}

let updateTemp = (conditions)=>{
    textForTemp = document.querySelector('#temp');
    // textForTemp.textContent = conditions[0].Temperature.Metric.Value;

    textForTemp.innerHTML = `${conditions[0].Temperature.Metric.Value} <span>&deg;C</span>`;
}

let updateLocation = async (city)=>{
    let cityCode = await getLocationKey(city);
    let currentConditions = await getCurrentConditions(cityCode);
    updateCity(city);
    updateWeatherCondition(currentConditions);
    updateTemp(currentConditions);
    console.log('Weather Conditions: ', currentConditions);
}



form.addEventListener( 'submit', (e)=>{
    e.preventDefault();
    
    const city = form.city.value.trim();

    // reset the form
    form.reset();

    // console.log('City Entered', city);
    // console.log('Api Key', apiKey);

    updateLocation(city);
})