
function getCocktailFromAPI(cocktailName){
  let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`;

  fetch(url)
    .then(response => {
      console.log(response.status)
      if(response.ok){
        return response.json();
      }
      else{
        throw new Error("Something went wrong, try again later.");
      }
    })
    .then(data => {
      displayResults(data);
    })
    .catch(err => {
      console.log(err);
    });
}

function displayResults(data){
  $('.results').html('');

  for ( let i = 0; i < data.drinks.length; i ++){
    $('.results').append(`
                          <h2> ${data.drinks[i].strDrink} </h2>
                          <img src="${data.drinks[i].strDrinkThumb}">
                        `);
  }

}

function watchForm(){
  $('.cocktailForm').on('submit', (event) => {
    event.preventDefault();
    
    let cocktailName = $('.cocktailName').val();
    $('.cocktailName').val('');

    getCocktailFromAPI(cocktailName);

  });
}

$(watchForm);