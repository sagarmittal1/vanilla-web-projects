const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

function generateQuote() {
  fetch('https://api.quotable.io/random')
    .then((res) => res.json())
    .then((data) => {
      quote.textContent = `“${data.content}”`;
      author.textContent = `― ${data.author}`;
    })
    .catch((err) => console.log(err));
}

window.addEventListener('load', generateQuote);
