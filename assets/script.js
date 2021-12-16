
const DOMAIN = 'https://www.thecocktaildb.com';
const drinkDiv = document.querySelector("#drink-container");
const searchForm = document.querySelector("#drink-form");
const drinkSearchInput = document.querySelector("#drink-search");

const tappasDiv = document.querySelector("#tappas-container")
const ID = "4874856d";
const KEY = "%2021853e04836d6e48c165e80678b3984a";
const DOMAIN2 = `https://api.edamam.com/api/recipes/v2?type=public&q=snack&app_id=4874856d&app_key=%2021853e04836d6e48c165e80678b3984a&random=true`

const displayTappas = (tappas) => {
  tappasDiv.innerHTML = "";
  console.log(tappas);
  // tappas.forEach((app) => {
    let h3 = document.createElement("h3")
    h3.innerText = `${tappas[0].recipe.label}`;
    tappasDiv.appendChild(h3)

    let img = document.createElement("img");
    img.src = tappas[0].recipe.images.REGULAR.url;
    img.alt = tappas[0].recipe.label;
    tappasDiv.appendChild(img);

    let a = document.createElement("a");
    a.href = `${tappas[0].recipe.url}`;
    a.innerText = "Click Here"
    tappasDiv.appendChild(a)
  // });
}

const fetchTappas = () => {
  console.log("here")
  axios
    .get("https://api.edamam.com/api/recipes/v2?type=public&q=snack&app_id=4874856d&app_key=%2021853e04836d6e48c165e80678b3984a&random=true")
    .then((response) => {
      console.log(response)
      let tappas = response.data.hits;
      displayTappas(tappas);
    })
    .catch((error) => {
      console.log("HELLO THIS IS AN ERROR");
      console.log(error);
    })
    .finally(() => console.log("done"));
};

const tappasButton = document.querySelector("#button");
tappasButton.addEventListener("click", fetchTappas);

////////////////////////////////////////////////////////////


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
  // data.drinks.forEach(drink => {
    const div = document.createElement("div")
    const h2 = document.createElement("h2")
    h2.innerText = drink.strDrink
    div.appendChild(h2)

    const h4 = document.createElement("h4")
    h4.innerText = drink.strGlass
    div.appendChild(h4)


    for (const [key, value] of Object.entries(drink)) {
      if (key.includes("strIngredient")) {
        if (value) {
          const num = key.split('strIngredient')
          const h3 = document.createElement("h3")
          if (drink[`strMeasure${num[1]}`]) {
            h3.innerText = `${drink[`strMeasure${num[1]}`]} ${value}`
          } else {
           h3.innerText = value
          }
          div.appendChild(h3)
        }
      } 
     }

    const h3 = document.createElement("p1")
    h3.innerText = drink.strInstructions
    div.appendChild(h3)

    const img = document.createElement("img")
    img.src = drink.strDrinkThumb
    div.appendChild(img)

    drinkName.appendChild(div)
  // });


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


