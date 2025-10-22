
const myDate = document.querySelector('#current-date');

// const timestamp = Date.now();

// const today = new Date(timestamp);

// const options = {year: 'numeric', month: 'long', day: 'numeric'};

// const finalDate = today.toLocaleDateString(undefined, options);

// myDate.textContent = `Date: ${finalDate}`;

myDate.textContent = `Date-ms: ${Date.now()}`;