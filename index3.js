const countriesElem = document.querySelector(".countries");
const dropDown = document.querySelector(".dropDown");
const dropElement = document.querySelector(".drop");
const region = document.querySelectorAll(".region");
const search = document.querySelector(".search");
const toggle = document.querySelector(".toggle");
const moon = document.querySelector(".moon");
// const compare = document.querySelectorAll(".compare");
// const carts = document.querySelectorAll(".cart");
let AllCountries = [];
let selectedCountries = [];
var disp = document.getElementById("display");

async function main() {
  AllCountries = await getCountries();
  renderCountries(AllCountries);
}
function getCountries() {
  const url = "https://restcountries.com/v2/all";
  return axios.get(url).then((res) => res.data);
}
main();

function renderCountries(AllCountries) {
  console.log(AllCountries);
  AllCountries.forEach((country) => {
    const countryContainer = document.createElement("div");
    countryContainer.classList.add("country");
    countryContainer.innerHTML = ` <div class="country-img">
      <img src="${country.flag}" alt="image" />
    </div>
    <div class="country-info"> 
      <h5 class="countryName">${country.name}</h5>
      <p><strong>population:</strong>${country.population}</p>
      <p class="regionName"><strong>region:</strong>${country.region}</p>
      <p><strong>capital:</strong>${country.capital}</p>
      <form name="main" > 
    <input type="checkbox" id="add-to-compare" value="${country.name}"  class="compare">
    <span >Add to Compare</span>
   
    </form>
    </div>
   `;
    countriesElem.appendChild(countryContainer);
    countryContainer.addEventListener("click", compareHandler);
  });
}

const countryArray = [];

function compareHandler(e) {
  if (e.target.id === "add-to-compare") {
    const name = e.target.value;
    console.log(name);
    if (selectedCountries.includes(name)) {
      selectedCountries.splice(selectedCountries.indexOf(name), 1);
    } else {
      selectedCountries.push(name);
    }

    window.localStorage.setItem(
      "selectedCountries",
      JSON.stringify(selectedCountries)
    );

    disp.innerHTML = selectedCountries.length;
    window.localStorage.setItem("selectedCountries", selectedCountries);
    const selectedCountriesFullData = AllCountries;
  }
}

dropDown.addEventListener("click", () => {
  dropElement.classList.toggle("showDropDown");
});
const regionName = document.getElementsByClassName("regionName");
const countryName = document.getElementsByClassName("countryName");


search.addEventListener("input", () => {
  Array.from(countryName).forEach((elem) => {
    if (elem.innerText.toLowerCase().includes(search.value.toLowerCase())) {
      elem.parentElement.parentElement.style.display = "grid";
    } else {
      elem.parentElement.parentElement.style.display = "none";
    }
  });
});
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  moon.classList.toggle("fas");
});
