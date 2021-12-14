
const cocktailDiv = document.querySelector("#cocktail-data");

async function fetchData(cocktail) {
    try{
        const url = `https://thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`;
        const res = await axios.get(url);
        const cocktailData = res.data;
        console.log(cocktailData);
        cocktailData.forEach((cocktailObj) => {
            showCocktailData(cocktailObj);       
        })
    }catch (error) {
        displayErrorMessage();
    }
}

function showCocktailData(data) {
    console.log(data);
  
    
    const cocktailName = document.createElement("h2");
    cocktailName.innerText = `${data.drinks.strDrink} ${data.strImageSource}`;
    cocktailDiv.appendChild(cocktailName);
  
    const cocktailImg = document.createElement("img");
    cocktailImg.src = data.strImageSource.jpg;
    console.dir(cocktailImg);
    cocktailImg.alt = `Image of ${data.drinks.strDrink}`;
    cocktailDiv.appendChild(cocktailImg);
  
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
    removeCountry();
}

function removeCountry() {

    cocktailDiv.innerHTML = "";
  } 