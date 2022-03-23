const { Recipe } = require('../models');

const recipeData = [
  {
    name: 'Shrimp Scampi',
    description:
      'Quick and tasty shrimp and pasta, finished with lemon and red pepper flakes.',
    image_url: '/images/shrimpscampi.jpg',
    recipe_url:
      'https://www.foodnetwork.com/recipes/food-network-kitchen/classic-shrimp-scampi-8849846',
  },
  {
    name: 'Buffalo Chicken Enchiladas',
    description:
      'Stuff corn tortillas with a cheesy Buffalo filling and bake until melted for an easy weeknight meal',
    image_url: '/images/buffalochicken.jpg',
    recipe_url:
      'https://www.foodnetwork.com/recipes/food-network-kitchen/buffalo-chicken-enchiladas-4595591',
  },
  {
    name: 'Glazed Salmon and Spiced Carrots',
    description:
      'Honey-mustard glazed salmon and serve it with carrots tossed in a spiced lime and almond dressing.',
    image_url: '/images/salmonandcarrots.jpg',
    recipe_url:
      'https://www.foodnetwork.com/recipes/food-network-kitchen/glazed-salmon-with-spiced-carrots-recipe-1973319',
  },
  {
    name: 'Ravioli with Sage and Walnut Butter',
    description:
      'Store bought ravioli gets an upgrade with this buttery sage and walnut butter.',
    image_url: '/images/ravioli.jpg',
    recipe_url:
      'https://www.foodnetwork.com/recipes/food-network-kitchen/ravioli-with-sage-walnut-butter-recipe-1973609',
  },
  {
    name: 'Turkey Pad Thai',
    description:
      'Loaded with fresh veggies, this take on pad thai is hearty and healthy.',
    image_url: '/images/padthai.jpg',
    recipe_url:
      'https://www.foodnetwork.com/recipes/melissa-darabian/turkey-pad-thai-recipe-2118867',
  },
  {
    name: 'Garlic Butter Baked Salmon',
    description:
      'Quick and easy, this garlic butter glazed baked salmon is a tasty, weeknight meal.',
    image_url: '/images/garlicsalmon.jpg',
    recipe_url: 'https://cafedelites.com/sheet-pan-garlic-butter-baked-salmon/',
  },
  {
    name: 'Chipotle Chicken Skewers',
    description: 'The grilled chicken skewers pack a bit of spice.',
    image_url: '/images/skewers.jpg',
    recipe_url:
      'https://www.melskitchencafe.com/chipotle-chicken-skewers-with-creamy-dipping-sauce/',
  },
  {
    name: 'Hamburger',
    description: 'An American classic with an upgrade.',
    image_url: '/images/hamburger.jpg',
    recipe_url: 'https://tastesbetterfromscratch.com/hamburger-recipe/',
  },
  {
    name: 'Potato Wedges',
    description:
      'A one pan meal. Perfectly seasoned and baked until crispy, easy and tasty.',
    image_url: '/images/potatowedges.jpg',
    recipe_url: 'https://tasty.co/recipe/potato-wedges',
  },
  {
    name: 'Zuppa Toscana',
    description:
      'Creamy and full of flavor, this is the perfect recipe for this classic Italian soup.',
    image_url: '/images/zuppatoscana.jpg',
    recipe_url: 'https://www.thechunkychef.com/slow-cooker-zuppa-toscana/',
  },
  {
    name: 'Pasta Salad',
    description:
      'Fresh and easy pasta salad packed with crisp vegetables, fresh mozzarella, and tossed with a simple homemade dressing.',
    image_url: '/images/pastasalad.jpg',
    recipe_url: 'https://www.crunchycreamysweet.com/italian-pasta-salad/',
  },
  {
    name: 'Cool Summer Soba Noodle Salad',
    description:
      'A refreshing summer salad with veggies and an Asian inspired dressing.',
    image_url: '/images/sobanoodles.jpg',
    recipe_url: 'https://www.thespruceeats.com/cold-soba-noodle-salad-4142109',
  },
  {
    name: 'Parmesan Bread Twist',
    description:
      'Made with store bought dough, this quick recipe will ease your craving for Italian takeout.',
    image_url: '/images/twists.jpg',
    recipe_url: 'https://www.plainchicken.com/easy-parmesan-bread-twists/',
  },
  {
    name: 'Chipotle Stout Chili',
    description:
      'Filled with slow cooked meat and veggies, this chili is an unbeatable weeknight meal.',
    image_url: '/images/chili.jpg',
    recipe_url: 'https://whitneybond.com/chipotle-stout-crock-pot-chili/',
  },
  {
    name: 'Chicken Marsala',
    description: 'Creamy, slow simmered chicken in a rich sauce.',
    image_url: '/images/chickenmarsala.jpg',
    recipe_url: 'https://www.onceuponachef.com/recipes/chicken-marsala.html',
  },
  {
    name: 'Chili Glazed Salmon',
    description: 'Baked salmon with a sweet and spicy glaze.',
    image_url: '/images/chiliglazedsalmon.jpg',
    recipe_url: 'https://tasty.co/recipe/3-ingredient-chili-glazed-salmon',
  },
  {
    name: 'Baked Ranch Chicken',
    description:
      'Baked chicken coated in ranch seasoning and bread crumbs for a flavorful, crispy dinner.',
    image_url: 'ranchchicken.jpg',
    recipe_url: 'https://www.jocooks.com/recipes/baked-ranch-chicken/',
  },
  {
    name: 'Baked Shrimp',
    description:
      'A perfect, one pan meal. These shrimp are perfectly seasoned and ready in just a few minutes.',
    image_url: '/images/bakedshrimp.jpg',
    recipe_url: 'https://www.acouplecooks.com/easy-baked-shrimp/',
  },
  {
    name: 'Cheeseburger Stuffed Bell Pepper',
    description: 'A healthy, veggie forward take on a classic weeknight meal.',
    image_url: '/images/cheeseburgerpeppers.jpg',
    recipe_url:
      'https://www.organizeyourselfskinny.com/cheeseburger-stuffed-peppers/',
  },
  {
    name: 'Baked Mac & Cheese',
    description:
      'A grown up version of a childhood classic, this cheesy pasta is finished in the oven for a crispy upgrade.',
    image_url: '/images/macandcheese.jpg',
    recipe_url:
      'https://www.thechunkychef.com/family-favorite-baked-mac-and-cheese/',
  },
];

const seedRecipes = () => Recipe.bulkCreate(recipeData);
seedRecipes();
module.exports = seedRecipes;
