const url = process.env.NEXT_PUBLIC_RECIPE_URL;
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f0dc26a346mshfb08638ddac48fcp1ef76bjsn673e97ac5507",
    "X-RapidAPI-Host": "food-recipes-with-images.p.rapidapi.com",
  },
};

export default async function getRecipe() {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
