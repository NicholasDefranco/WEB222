const dropDownListCountry = document.querySelector("#cities");

/*
  The most commonly used way of consuming a REST API in javaScript is by creating an XMLHttpRequest object. This allows you to send HTTP Request from your web application to another external sever!!!! 

*/

const xhr = new XMLHttpRequest();


dropDownListCountry.addEventListener("change",function(){

   const endPoint =`https://api.apixu.com/v1/current.json?key=b077dd0365574ceca6d190040181311&q=${dropDownListCountry.value}`;


  /*
    The open() method purpose is to indicate to the browser the endpoint of the API that you want to consume, as well as the type of HTTP Request you wish to send!!!!

  */
   xhr.open("GET",endPoint);


   /*

    The send method sends the request to API Server!!
   */
   xhr.send();


   xhr.addEventListener("readystatechange",populateWeather)

});

function populateWeather()
{

  if(xhr.readyState==4)
  {
    /* The responseText property stores the json response   */
    const jsonResponse = JSON.parse(xhr.responseText);

   

    const div = document.querySelector("#container");

    div.innerHTML=`<br><br>The current temperature in ${dropDownListCountry.value} is ${jsonResponse.current.temp_c}`;


    const image = document.createElement("img");
    image.setAttribute("src",jsonResponse.current.condition.icon);



    div.appendChild(image);

  


  }


}
