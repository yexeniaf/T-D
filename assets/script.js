
const DOMAIN = 'https://www.thecocktaildb.com';
const drinkDiv = document.querySelector("#drink-container");
const searchForm = document.querySelector("#drink-form");
const drinkSearchInput = document.querySelector("#drink-search");

async function fetchData(drink) {
  try {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`;
    const res = await axios.get(url);
    const drinkData = res.data;
    showDrinkData(drinkData);
  } catch (error) {
    }
}


function showDrinkData(data) {
  console.log(data);

  const drinkName = document.querySelector("#drink-result")
  data.drinks.forEach(drink => {
    const div = document.createElement("div")
    const h2 = document.createElement("h2")
    h2.innerText = drink.strDrink
    div.appendChild(h2)

    const img = document.createElement("img")
    img.src = drink.strDrinkThumb
    div.appendChild(img)

    for (const [key, value] of Object.entries(drink)) {
     if (key.includes("strIngredient")) {
       if (value) {
         const h3 = document.createElement("h3")
         h3.innerText = value
         div.appendChild(h3)
       }
     } 
    }

    const h4 = document.createElement("h4")
    h4.innerText = drink.strInstructions
    div.appendChild(h4)


    drinkName.appendChild(div)
  });


  drinkName.innerText = `${data.drinks[i].strDrink}`;
  drinkDiv.appendChild(drinkName);

  const drinkImg = document.createElement("img");
  drinkImg.src = data.drinks.strDrinkThumb.jpg;
  console.dir(drinkImg);
  drinkImg.alt = `Image of ${data.drinks.srtDrink}`;
  drinkDiv.appendChild(drinkImg);
}


searchForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  console.log(drinkSearchInput.value);
  let inputValue = drinkSearchInput.value;
  drinkSearchInput.value = "";
  console.log(inputValue);
  fetchData(inputValue);
}



