const cocktailDiv = document.querySelector("#cocktail-data");

async function fetch(cocktail) {
    try{
        const url = ``;
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