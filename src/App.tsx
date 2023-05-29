import React, { useState } from "react";
import "./App.css";
import Meals from "./components/Meals";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/navbar.css";
import GlobalStyle from "./utils/GlobalStyles";
import SelectData from "./components/SelectData";
import DataService from "./services/dataService";
import ICategories from "./interfaces/categories";
import IIngredients from "./interfaces/ingredients";
import IAreas from "./interfaces/areas";
import { AxiosResponse } from "axios";

function App() {
  const dataService = new DataService();

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedIngredient, setSelectedIngredient] = useState("");
  const [selectedArea, setSelectedArea] = useState("");

  const [categories, setCategories] = useState<ICategories[]>([]);
  const [ingredients, setIngredients] = useState<IIngredients[]>([]);
  const [areas, setAreas] = useState<IAreas[]>([]);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const handleIngredientSelect = (ingredient: string) => {
    setSelectedIngredient(ingredient);
  };

  const handleAreaSelect = (area: string) => {
    setSelectedArea(area);
  };

  return (
    <>
      <GlobalStyle />
      <div>
        <div className="navbar d-flex justify-content-around">
          <img
            className="img-thumb"
            src="https://www.themealdb.com/images/meal-icon.png"
          />
          <SelectData
            onSelect={handleCategorySelect}
            selected={selectedCategory}
            dataService={(value: string) => dataService.filterByCategories(value)}
            data={categories}
            placeholder="Select a category"
          />
          <SelectData
            onSelect={handleIngredientSelect}
            selected={selectedIngredient}
            dataService={(value: string) => dataService.filterByIngredients(value)}
            data={ingredients}
            placeholder="Select an ingredient"
          />
          <SelectData
            onSelect={handleAreaSelect}
            selected={selectedArea}
            dataService={(value: string) => dataService.filterByAreas(value)}
            data={areas}
            placeholder="Select an area"
          />
        </div>
        <Meals
          categorySelected={selectedCategory}
          ingredientSelected={selectedIngredient}
          areaSelected={selectedArea}
        />
      </div>
    </>
  );
}

export default App;
