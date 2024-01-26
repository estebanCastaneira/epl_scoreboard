import { useSelector } from "react-redux"
function IncidenceSelect({ incidence, setIncidence, team }) {
  const homeSubCount = useSelector(
    (state) => state.incidences.home.incidences.subCount
  )
  const awaySubCount = useSelector(
    (state) => state.incidences.away.incidences.subCount
  )
  const count = team === "home" ? homeSubCount : awaySubCount
  console.log(count)
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
