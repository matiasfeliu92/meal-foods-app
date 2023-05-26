import React, { useState } from 'react';
import './App.css';
import Meals from './components/Meals';
import Areas from './components/Areas';
import Categories from './components/Categories';
import Ingredients from './components/Ingredients';
import ICategories from './interfaces/categories';

function App() {
  const [categorySelected, setCategorySelected] = useState('')
  const [ingredientSelected, setIngredientSelected] = useState('')
  const [areaSelected, setAreaSelected] = useState('')

  return (
    <div className="App">
      <Categories onSelect={(category: string) => setCategorySelected(category)} categorySelected={categorySelected} setCatSelect={setCategorySelected}/>
      <Ingredients/>
      <Areas/>
      <Meals categorySelected={categorySelected}/>
    </div>
  );
}

export default App;
