const elements = {
  searchForm: document.querySelector('.js-search-form'),
  list: document.querySelector('.js-list'),
};

elements.searchForm.addEventListener('submit', handleSearch);

function handleSearch(event) {
  event.preventDefault();

  const { city, days } = event.currentTarget.elements;

  serviceWeather(city.value, days.value)
    .then(
      data =>
        (elements.list.innerHTML = createMarkup(
          data.forecast.forecastday,
          city.value
        ))
      // console.log(data.location.name)
    )
    .catch(error => console.log(error))
    .finally(() => event.target.reset());
}

function serviceWeather(city, days) {
  const BASE_URL = 'https://api.weatherapi.com/v1';
  const END_POINT = '/forecast.json';
  const API_KEY = '37aae5bd885543b9a42120737242004';

  const params = new URLSearchParams({
    key: API_KEY,
    q: city,
    days: days,
    lang: 'uk',
  });

  return fetch(`${BASE_URL}${END_POINT}?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}

function createMarkup(arr, city) {
  return arr
    .map(
      ({
        date,
        day: {
          avgtemp_c,
          condition: { icon, text },
        },
      }) => `<li class="weather-card">
             <h2 class="city">${city}</h2>
            <img class="weather-icon" src="${icon}" alt="${text}">
            <h2 class="date">${date}</h2>
            <h3 class="weather-text">${text}</h3>
            <h3 class="temp">${avgtemp_c}°C</h3>
        </li>`
    )
    .join('');
}
