import React, { SetStateAction, useState, useEffect } from "react";
import DataService from "../services/dataService";
import ICategories from "../interfaces/categories";
import IIngredients from "../interfaces/ingredients";
import IAreas from "../interfaces/areas";
import { AxiosResponse } from "axios";
import IMeal from "../interfaces/meal";

type Props = {
  onSelect?: (value: string) => void;
  selected?: string;
  dataService: (value: string) => AxiosResponse<IMeal[]>;
  data?: ICategories[] | IIngredients[] | IAreas[];
  placeholder?: string;
};

const SelectData = ({
  onSelect,
  selected,
  dataService,
  data,
  placeholder
}: Props) => {
  const [options, setOptions] = useState<IMeal[]>([]);

  useEffect(() => {
    if (dataService) {
      dataService("").then((result: IMeal[]) => setOptions(result));
    }
  }, [dataService]);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    if (onSelect) {
      onSelect(selectedValue);
    }
  };

  return (
    <div className="text-center">
      <h3>{placeholder}</h3>
      <select value={selected} onChange={handleSelectChange}>
  <option value="">Select an option</option>
  {options && options.map((option) => (
    <option key={option.idMeal} value={option.strMeal}>
      {option.strMeal}
    </option>
  ))}
</select>

    </div>
  );
};

export default SelectData;
