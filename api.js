const APP_ID = "0765a9c499d7bbb55e963e4f6977e3ac9d3094c4";
const API_LINK = "https://api.jcdecaux.com/vls/v1/stations?contract={contract_name}&apiKey={api_key}";
const APP_CITY_NAME = "toulouse";
const adress = "";
const number = 12;

// Get data

const getData = async data => {
  const response = await fetch(`https://api.jcdecaux.com/vls/v1/stations?contract=${APP_CITY_NAME}&number=${number}&apiKey=${APP_ID}`);
  const data = await response.json();
  console.log(data[number]);
  console.log(data[0].available_bike_stands);
};

document.getElementById("getDataBtn").addEventListener("click", getData);
