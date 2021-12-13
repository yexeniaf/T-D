const cocktailDiv = document.querySelector("#cocktail-data");

async function fetch(cocktail) {
    try{
        const url = `www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`;
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
    cocktailyName.innerText = `${data.strDrink} ${data.strImageSource}`;
    cocktailDiv.appendChild(cocktaillName);
  
    const cocktailImg = document.createElement("img");
    cocktailImg.src = data.cocktails.svg;
    console.dir(cocktailImg);
    cocktailImg.alt = `Image of ${data.strDrink}`;
    cocktailDiv.appendChild(cocktailImg);
  
    const cocktailCurr = document.createElement("img");
    cocktailImg.src = data.strImageSource;
    console.dir(cocktailImg);
    cocktailImg.alt = `Image of ${data.strDrink}`;
    cocktailDiv.appendChild(cocktailImg);
    //   // ???
  }
  
  // Step 5: Dynamically search country using HTML form with eventHandler
  
  // Write eventHandler here
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
    // write code here
    // Make sure to call this function???
    cocktailDiv.innerHTML = "";
  }