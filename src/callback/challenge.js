//Uso de api url = https://rickandmortyapi.com/api/character/

const url = "https://rickandmortyapi.com/api/character/";

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function fetchData(url, callback) {
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", url, true);
  xhttp.onreadystatechange = function (event) {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        const error = new Error("Error", url);
        return callback(error, null);
      }
    }
  };
  xhttp.send();
}

fetchData(url, function (error1, data1) {
  if (error1) {
    return console.error(error1);
  }
  fetchData(url + data1.results[0].id, function (error2, data2) {
    if (error2) {
      return console.error(error2);
    }
    fetchData(data2.origin.url, function (error3, data3) {
      if (error3) {
        return console.error(error3);
      }
      console.log(data1.info.count);
      console.log(data2.name);
      console.log(data3.dimension);
    });
  });
});
