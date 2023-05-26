import { SetStateAction, useEffect, useState } from "react";
import DataService from "../services/dataService";
import IIngredients from "../interfaces/ingredients";
import { AxiosResponse } from "axios";

type Props = {
  selectedIngredient: string;
  onSelect: (ingredient: string) => void;
  setIngredientSelect: React.Dispatch<SetStateAction<string>>;
};

const Ingredients = ({selectedIngredient, onSelect, setIngredientSelect}: Props) => {
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

  // console.log(ingredients);
  const handleIngredientChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedIngredient = e.target.value;
    setIngredientSelect(selectedIngredient)
    onSelect(selectedIngredient)
  }

  return (
    <div>
      <h3>select one ingredient</h3>
      <select onChange={handleIngredientChange}>
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
