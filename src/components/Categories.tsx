import { SetStateAction, useEffect, useState } from "react";
import DataService from "../services/dataService";
import ICategories from "../interfaces/categories";
import { AxiosResponse } from "axios";

type Props = {
  categorySelected: string;
  onSelect: (category: string) => void;
  setCatSelect: React.Dispatch<SetStateAction<string>>;
};

const Categories = ({categorySelected, onSelect, setCatSelect}: Props) => {
  const dataService = new DataService();
  const [categories, setCategories] = useState<ICategories[]>([]);

  useEffect(() => {
    dataService
      .getCategories()
      .then((res) => {
        setCategories(res.data.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // console.log(categories);
  // console.log(categorySelected)

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = e.target.value;
    setCatSelect(selectedCategory);
    onSelect(selectedCategory);
  }

  return (
    <div className="text-center">
      <h3>Select one category</h3>
      <select onChange={handleCategoryChange}>
        {categories.length > 0 &&
          categories.map((category) => (
            <option key={category.strCategory} value={category.strCategory}>
              {category.strCategory}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Categories;
