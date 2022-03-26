//create function if favorite button is clicked

const newFavoriteHandler = async (event) => {
  event.preventDefault();

  // get recipeid from button when clicked

  const recipe_id = event.target.value;

  if (recipe_id) {
    const response = await fetch(`/api/recipes/favorites`, {
      method: 'POST',
      body: JSON.stringify({ recipe_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
    } else {
      alert(
        'Failed to create favorite - you cannot favorite the same recipe twice!'
      );
    }
  }
};

document
  // .querySelector('.new-recipe-form')
  .querySelectorAll('.favbtn')
  .forEach((link) => link.addEventListener('click', newFavoriteHandler));
