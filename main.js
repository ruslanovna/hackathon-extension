document.addEventListener("DOMContentLoaded", () => {

  const quote = document.getElementById('quote');
  const button = document.getElementById('btn');

  button.addEventListener("click", getQuote);


  function getQuote() {
      fetch("https://type.fit/api/quotes")
      .then((quote) => quote.json())
      .then((quote) => {
          const newQuote = document.getElementById("quote");
          let i = getRandom(1642)
          console.log(i)
          newQuote.innerText = `${quote[i]["text"]}`;
        //div.appendChild(newQuote);
      });
  }

  getQuote();

  function getRandom(max) {
    return Math.floor(Math.random()*max)
  }

});

