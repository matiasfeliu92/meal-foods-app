import { SetStateAction, useEffect, useState } from 'react'
import DataService from '../services/dataService'
import IAreas from '../interfaces/areas'

type Props = {
  selectedArea: string;
  onSelect: (area: string) => void;
  setAreaSelected: React.Dispatch<SetStateAction<string>>;
};

const Areas = ({selectedArea, onSelect, setAreaSelected}: Props) => {
    const dataService = new DataService()
    const [areas, setAreas] = useState<IAreas[]>([])

    useEffect(() => {
        dataService
        .getAreas()
        .then((res) => {
            setAreas(res.data.meals)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    // console.log(areas)
    const handleAreaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedArea = e.target.value
      setAreaSelected(selectedArea)
      onSelect(selectedArea)
    }

  return (
    <div>
      <h3>select one area</h3>
      <select onChange={handleAreaChange}>
        {areas.length > 0 &&
          areas.map((area) => (
            <option key={area.strArea} value={area.strArea}>
              {area.strArea}
            </option>
          ))}
      </select>
    </div>
  )
}

export default Areas
