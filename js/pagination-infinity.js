const container = document.querySelector('.movie-list');
const guard = document.querySelector('.js-guard');

const defaults = {
  poster: 'https://images.app.goo.gl/61CBgUbN9ZZBLHtZ9',
  title: 'Title not found',
  date: 'XXXX-XX-XX',
  vote: 'XX.XX',
};

let page = 1;

const options = {
  root: null,
  rootMargin: '300px',
};

const observer = new IntersectionObserver(infinityScrollHandle, options);

function createMarkup(arr) {
  return arr
    .map(
      ({ poster_path, original_title, release_date, vote_average }) =>
        `<li class = "movie-card">
    <img class = "movie-poster" src="${
      poster_path
        ? 'https://image.tmdb.org/t/p/w300' + poster_path
        : defaults.poster
    }" alt="${original_title || defaults.title}">
    <div class = "movie-info">
        <h2>${original_title || defaults.title}</h2>
        <p>Release Date: ${release_date || defaults.date}</p>
        <p>Vote Average: ${vote_average || defaults.vote}</p>
    </div>
</li>`
    )
    .join('');
}

function fetchFilms(currentPage = '1') {
  const params = new URLSearchParams({
    page: currentPage,
    api_key: '958d54b28aac38e520173251abfc00d9',
  });
  return fetch(
    `https://api.themoviedb.org/3/trending/movie/week?${params}`
  ).then(response => {
    if (!response.ok) {
      throw new Error('Error');
    }
    return response.json();
  });
}

fetchFilms()
  .then(data => {
    container.insertAdjacentHTML('beforeend', createMarkup(data.results));

    if (data.page < data.total_pages) {
      observer.observe(guard);
    }
  })
  .catch(error => console.log(error));

function infinityScrollHandle(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      page += 1;
      fetchFilms(page)
        .then(data => {
            container.insertAdjacentHTML('beforeend', createMarkup(data.results));
            
            if (data.page >= data.total_pages) {
              observer.unobserve(guard);
            }
        })
        .catch(error => console.log(error));
    }
  });
}
