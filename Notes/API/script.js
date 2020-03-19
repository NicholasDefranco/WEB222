const but = document.querySelector("#go");
const text = document.querySelector("#place");

const xhr = new XMLHttpRequest();

but.addEventListener("click", function() {
  
  const endpoint = `https://api.apixu.com/v1/current.json?key=b077dd0365574ceca6d190040181311&q=${text.value}`;

  xhr.open("GET", endpoint);

  xhr.send();

  xhr.addEventListener("readystatechange", print);

});

function print() {
  if(xhr.readyState==4)
  {
    const jsonResponse = JSON.parse(xhr.responseText);

    const div = document.querySelector("#container");

    div.innerHTML = `${text.value} has coordinates lat: ${jsonResponse.location.lat} and lon: ${jsonResponse.location.lon}.<br>`

    if(jsonResponse.current.wind_kph > 10) {
      div.innerHTML += `Wow! It's windy!`;
    }

    div.style.border = `dotted`;

    

  }
}