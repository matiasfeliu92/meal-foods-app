import { useEffect, useState } from "react";
import DataService from "../services/dataService";
import IIngredients from "../interfaces/ingredients";
import { AxiosResponse } from "axios";

const Ingredients = () => {
  const dataService = new DataService();
  const [ingredients, setIngredients] = useState<IIngredients[]>([]);

  useEffect(() => {
    dataService
      .getIngredients()
      .then((res) => {
        setIngredients(res.data.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(ingredients);

  return (
    <div>
      <select>
        {ingredients.length > 0 &&
          ingredients.map((ingredient) => (
            <option key={ingredient.strIngredient} value={ingredient.strIngredient}>
              {ingredient.strIngredient}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Ingredients;
