import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
function IncidenceSelect({ incidence, setIncidence, team }) {
  const [count, setCount] = useState(0)
  const homeSubCount = useSelector(
    (state) => state.incidences.home.incidences.subsCount
  )
  const awaySubCount = useSelector(
    (state) => state.incidences.away.incidences.subsCount
  )
  useEffect(() => {
    const counter = team === "home" ? homeSubCount : awaySubCount
    console.log(counter)
    setCount(counter)
  }, [team, awaySubCount, homeSubCount])

  const handleOnChange = (event) => {
    setIncidence(event.target.value)
  }
  return (
    <div className="flex">
      <select
        className="py-2 px-6 w-56 rounded-lg text-center"
        name="incidence"
        id="incidence"
        value={incidence}
        onChange={handleOnChange}
      >
        <option value="" selected disabled>
          Pick an Incidence
        </option>
        <option value="score">Goal!</option>
        <option value="yellowCard">Yellow Card</option>
        <option value="redCard">Red Card</option>
        <option value="substitution" disabled={count === 5}>
          Substitution
        </option>
      </select>
    </div>
  )
}

export default IncidenceSelect
