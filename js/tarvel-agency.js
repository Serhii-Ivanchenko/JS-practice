const form = document.querySelector('.js-search-form');
const container = document.querySelector('.js-form-container');
const addFieldBtn = document.querySelector('.js-add-btn');
const list = document.querySelector('.js-list');

addFieldBtn.addEventListener('click', onAddFieldClick);
form.addEventListener('submit', onSubmit);

function onAddFieldClick() {
  container.insertAdjacentHTML(
    'beforeend',
    '<input type="text" name="country" />'
  );
}

async function onSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const countries = formData
    .getAll('country')
    .map(item => item.trim())
    .filter(item => item !== '')
    .filter((item, index, arr) => arr.indexOf(item) === index);
  try {
    const capitals = await serviceCountry(countries);
    const weather = await serviceWeather(capitals);

    list.innerHTML = createMarkup(weather);
  } catch (error) {
    console.log(error);
  } finally {
    container.innerHTML = '<input type="text" name="country" />';
  }
}

async function serviceCountry(countries) {
  const BASE_URL = 'https://restcountries.com/v3.1/name/';
  const responses = countries.map(async country => {
    const response = await fetch(`${BASE_URL}${country}`);
    if (!response.ok) {
      return Promise.reject(response.statusText);
    }
    return response.json();
  });

  const data = await Promise.allSettled(responses);
  return data
    .filter(({ status }) => status === 'fulfilled')
    .map(({ value }) => value[0].capital[0]);
}

async function serviceWeather(capitals) {
  const BASE_URL = 'https://api.weatherapi.com/v1/';
  const END_POINT = 'current.json';
  const API_KEY = '37aae5bd885543b9a42120737242004';

  const responses = capitals.map(async capital => {
    const params = new URLSearchParams({
      key: API_KEY,
      q: capital,
      lang: 'uk',
    });
    const resp = await fetch(`${BASE_URL}${END_POINT}?${params}`);

    if (!resp.ok) {
      return Promise.reject(resp.statusText);
    }

    return resp.json();
  });

  const data = await Promise.allSettled(responses);

  return data
    .filter(({ status }) => status === 'fulfilled')
    .map(
      ({
        value: {
          current: {
            condition: { text, icon },
            temp_c,
          },
          location: { name, country },
        },
      }) => {
        return { text, icon, temp_c, name, country };
      }
    );
}

function createMarkup(arr) {
  return arr
    .map(
      ({ text, icon, temp_c, name, country }) =>
        `<li class="weather-card">
        <h2 class="country">${country}</h2>
        <h2 class="city">${name}</h2>
        <img class="weather-icon" src="${icon}" alt="${text}">
        <p class="temp">${temp_c}°C</p>
        <p class="weather-text">${text}</p>
        </div>
      </li>`
    )
    .join('');
}
