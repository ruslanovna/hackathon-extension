document.addEventListener("DOMContentLoaded", () => {
  const title = document.createElement("h1");
  title.innerText = "Manifest";
  document.querySelector("body").appendChild(title);
  // make AJAX call here....

  fetch(
    "https://healthruwords.p.rapidapi.com/v1/quotes/?t=Wisdom&maxR=1&size=medium&id=731",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "healthruwords.p.rapidapi.com",
        "x-rapidapi-key": "4f822fb461mshffae70ceb64bf7dp174871jsn552f30b092a1",
      },
    }
  )
    .then(quote => quote.json())
    .then((quote) => {
      .innerText = `${quote}`
      console.log(quote);
    })
    .catch((err) => {
      console.error(err);
    });
});


