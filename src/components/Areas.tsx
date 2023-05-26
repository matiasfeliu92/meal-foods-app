import { useEffect, useState } from 'react'
import DataService from '../services/dataService'
import IAreas from '../interfaces/areas'

const Areas = () => {
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

    console.log(areas)


  return (
    <div>
      <select>
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
