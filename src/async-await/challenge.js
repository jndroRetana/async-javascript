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

const anotherFunction = async (url) => {
  try {
    const datagral = await fetchData(url);
    const character = await fetchData(`${url}${datagral.results[0].id}`);
    const dimension = await fetchData(character.origin.url);
    console.log(datagral.info.count);
    console.log(character.name);
    console.log(dimension.dimension);
  } catch (error) {
    console.error(error.message);
  }
};

anotherFunction(url);
