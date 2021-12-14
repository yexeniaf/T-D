const drinkDiv = document.querySelector("#cocktail-result");

async function fetchData(drink) {
  try {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`;
    const res = await axios.get(url);
    const drinkData = res.data;
    console.log(drinkData);
    drinkData.forEach((drinkObj) => {
      showDrinkData(drinkObj);
    })
    showDrinkData(drinkData);
  } catch (error) {
    displayErrorMessage();
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

  const drinkName = document.querySelector("")
  drinkName.innerText = `${data.drinks.srtDrink}`;
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










































// const cocktailDiv = document.querySelector("#cocktail-Result");


// async function fetchData(cocktail) {
//     try{
//         const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`;
//         const res = await axios.get(url);
//         const cocktailData = res.data;
//         console.log(cocktailData);
//         cocktailData.forEach((cocktailObj) => {
//             showCocktailData(cocktailObj);       
//         })
//     }catch (error) {
//         let h1 = document.createElement("h1");
//               h1.innerText = "Not Found";
//               document.body.appendChild(h1);
//         fetchData("");
        
//     }
// }

// function showCocktailData(data) {
//     console.log(data);
  
    
//     const cocktailName = document.createElement("h2");
//     cocktailName.innerText = `${data.drinks.strDrink} ${data.strImageSource}`;
//     cocktailDiv.appendChild(cocktailName);
  
//     const cocktailImg = document.createElement("img");
//     cocktailImg.src = data.strImageSource.jpg;
//     console.dir(cocktailImg);
//     cocktailImg.alt = `Image of ${data.drinks.strDrink}`;
//     cocktailDiv.appendChild(cocktailImg);
  
//   }
  
//   const searchForm = document.querySelector("#cocktail-form");
//   const searchInput = document.querySelector("#cocktail-search");
  
//   searchForm.addEventListener("submit", handleSubmit);
  
//   function handleSubmit(event) {
//     event.preventDefault();
//     console.log(searchInput.value);
//     let inputValue = searchInput.value;
//     searchInput.value = "";
//     console.log(inputValue);
//     fetchData(inputValue);
//     removeCountry();
// }

// function removeCountry() {

//     cocktailDiv.innerHTML = "";
//   } 

//   console.log(axios);
