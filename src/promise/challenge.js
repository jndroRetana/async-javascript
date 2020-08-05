//Uso de api url = https://rickandmortyapi.com/api/character/

//Uso de api url = https://rickandmortyapi.com/api/character/

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const url = "https://rickandmortyapi.com/api/character/";

const fetchData = (url, callback) => {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);
    xhttp.onreadystatechange = function (event) {
      if (xhttp.readyState === 4) {
        xhttp.status === 200
          ? resolve(JSON.parse(xhttp.responseText))
          : reject(new Error("Error", url));
      }
    };
    xhttp.send();
  });
};

fetchData(url)
  .then((data) => {
    console.log(data.info.count);
    return fetchData(`${url}${data.results[0].id}`);
  })
  .then((data) => {
    console.log(data.name);
    return fetchData(data.origin.url);
  })
  .then((data) => {
    console.log(data.dimension);
  })
  .catch((error) => console.log(error));
