const quotes = [
  {
    quote: `"With great power comes great responsibility."`,
    movie: `-Spider Man`,
  },
  {
    quote: `"It's not our abilities that show what we truly are… it is our choices."`,
    movie: `-Harry Potter`,
  },
  {
    quote: `"The things you own end up owning you."`,
    movie: `-Fight Club`,
  },
  {
    quote: `The only thing standing between you and your goal is the story you keep telling yourself as to why you can’t achieve it.`,
    movie: `-The Secret`,
  },
  {
    quote: `"You have to be a little crazy to do this job."`,
    movie: `-The Pursuit of Happyness`,
  },
  {
    quote: `"Do you really think you can save the world?"`,
    movie: `-The Matrix`,
  },
  {
    quote: `"It’s never too late to be what you might have been."`,
    movie: `-The Curious Case of Benjamin`,
  },
  {
    quote: `"The future belongs to those who believe in the beauty of their dreams."`,
    movie: `-The Pursuit of Happyness`,
  },
  {
    quote: `"We are who we choose to be."`,
    movie: `-The Polar Express`,
  },
];

let btn = document.querySelector("#Qbtn");
let quote = document.querySelector(".quote");
let movie = document.querySelector(".movie");

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerHTML = quotes[random].quote;
  movie.innerHTML = quotes[random].movie;
});
