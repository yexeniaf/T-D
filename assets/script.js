
const DOMAIN = 'https://www.thecocktaildb.com';
const drinkDiv = document.querySelector("#drink-container");
const searchForm = document.querySelector("#drink-form");
const drinkSearchInput = document.querySelector("#drink-search");

const tappasButton = document.querySelector("#Tappas");
const tappasDiv = document.querySelector("#Tappas-Cntainer")
const ID = "4874856d";
const KEY = "%2021853e04836d6e48c165e80678b3984a";
const DOMAIN2 = `https://api.edamam.com/api/recipes/v2?type=public&q=snack&app_id=4874856d&app_key=%2021853e04836d6e48c165e80678b3984a&random=true`

async function fetchData(tappas) {
  try {
    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=snack&app_id=${ID}&app_key=${KEY}&random=true`;
    const response = await axios.get(url);
    const tappasData = response.data;
    showTappasData(tappasData);
  } catch (error) {
    }
}

function showTappasData(data) {
  console.log(data);

  const tappasName = document.querySelector("#Tappas-Container")
  data.recipes.forEach(tappas => {
    const div = document.createElement("div")
    const h2 = document.createElement("h2")
    h2.innerText = tappas.label
    div.appendChild(h2)

    const img = document.createElement("img")
    img.src = recipe.images
    div.appendChild(img)

    const h3 = document.createElement("h3")
    h3.src = recipe.url
    div.appendChild(h3)

    tappasName.appendChild(div);
  })

  tappasName.innerText = `${tappas.recipe[0].lable}`;
  tappasDiv.appendChild(tappasName);


} 

tappasButton.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   console.log()
// }


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

    const h4 = document.createElement("h4")
    h4.innerText = drink.strGlass
    div.appendChild(h4)

    for (const [key, value] of Object.entries(drink)) {
      if (key.includes("strMeasure")) {
        if (value) {
          const h3 = document.createElement("h3")
          h3.innerText = value
          div.appendChild(h3)
        }
      } 
     }

    for (const [key, value] of Object.entries(drink)) {
     if (key.includes("strIngredient")) {
       if (value) {
         const h3 = document.createElement("h3")
         h3.innerText = value
         div.appendChild(h3)
       }
     } 
    }

    const h3 = document.createElement("p1")
    h3.innerText = drink.strInstructions
    div.appendChild(h3)

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
  // removeData();
}

// function removeData() {
//   drinkDiv.innerHTML = "";
// }


