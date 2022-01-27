document.addEventListener("DOMContentLoaded", () => {
  const title = document.createElement("h1");
  title.innerText = "Manifest";
  document.querySelector("body").appendChild(title);
  // make AJAX call here....

  const quote = document.querySelector('#quote');
  const button = document.querySelector('#btn')

  button.addEventListener("click", getQuote)


  function getQuote() {
      fetch(
      "https://zenquotes.io/api/quotes",
      .then((response) => response.json())
      .then((response) => {
          console.log(response[0])
          // quote.innerText = response
      });
  }

});
