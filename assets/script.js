const DOMAIN = 'https://www.thecocktaildb.com';
const drinkDiv = document.querySelector("#cocktail-result");

async function fetchData(drink) {
  try {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`;
    
    
    
    
    
    const res = await axios.get(url);
    const drinkData = res.data;
    // console.log(drinkData);
    // drinkData.forEach((drinkObj) => {
    //   showDrinkData(drinkObj[0]);
    // })
    showDrinkData(drinkData);
  } catch (error) {
    // displayErrorMessage();
  }
}

function displayErrorMessage() {
  const errorImg = document.createElement("img");
  errorImg.src = "https://i.giphy.com/media/8L0Pky6C83SzkzU55a/giphy.webp";
  errorImg.alt = "404 ghost error";
  errorImg.style.margin = "0 auto";
  errorImg.style.display = "block";
  drinkDiv.appendChild(errorImg);
}

function placeHolder() {
  const h4 = document.createElement("h4");
  h4.innerText = "Search here for a drink!";
  drinkDiv.appendChild(h4);
}

placeHolder();


function showDrinkData(data) {
  console.log(data);

  const drinkName = document.querySelector("#cocktail-result")
  drinkName.innerText = `${data.drinks[0].strDrink}`;
  drinkDiv.appendChild(drinkName);

  const drinkImg = document.createElement("img");
  drinkImg.src = data.drinks.strDrinkThumb.jpg;
  console.dir(drinkImg);
  drinkImg.alt = `Image of ${data.drinks.srtDrink}`;
  drinkDiv.appendChild(drinkImg);
}

const searchForm = document.querySelector("#cocktail-form");
const searchInput = document.querySelector("#cocktail-search");

searchForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  console.log(searchInput.value);
  let inputValue = searchInput.value;
  searchInput.value = "";
  console.log(inputValue);
  fetchData(inputValue);
  removedrink();
}


function removedrink() {
 
  drinkDiv.innerHTML = "";
}
