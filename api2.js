const inputValue = document.querySelector("#search");
const searchButton = document.querySelector(".searchButton");

const APP_ID = "0765a9c499d7bbb55e963e4f6977e3ac9d3094c4";
const API_LINK = "https://api.jcdecaux.com/vls/v1/stations?contract={contract_name}&apiKey={api_key}";

const fetchCityName = async city => {
  const api_call = await fetch(`https://api.jcdecaux.com/vls/v1/stations?contract=${city}&apiKey=${APP_ID}`);
  const data = await api_call.json();
  return { data };
};

const showData = () => {
  fetchCityName(inputValue.value).then(res => {
    console.log(res);
  });
};

searchButton.addEventListener("click", () => {
  showData();
});
