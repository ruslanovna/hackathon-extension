document.addEventListener("DOMContentLoaded", () => {
  //enter Your name 
  const nameBtn = document.getElementById('myNameBtn')
  const name = document.getElementById('nameInput')
  const nameP = document.getElementById('name')


  nameBtn.addEventListener('click', () => {
    nameP.innerText = `${name.value},`;
    name.value = '';
  })
  

  //generate a new Quote
  const quote = document.getElementById('quote');
  const button = document.getElementById('btn');

  button.addEventListener("click", getQuote);


  function getQuote() {
      fetch("https://type.fit/api/quotes")
      .then((quote) => quote.json())
      .then((quote) => {
          const newQuote = document.getElementById("quote");
          let i = getRandom(1642);
          newQuote.innerText = `${quote[i]["text"]}`;
        //div.appendChild(newQuote);
      });
  }

  getQuote();

  function getRandom(max) {
    return Math.floor(Math.random()*max)
  }
  
  const today = new Date().toDateString();
  const date = document.createElement('div');
  date.setAttribute('id', 'date');
  date.innerText = `${today}`;
  document.body.appendChild(date);
  
});

