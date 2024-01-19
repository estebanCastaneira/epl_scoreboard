function Incidence({ incidence, setIncidence }) {
  const handleOnChange = (event) => {
    setIncidence(event.target.value)
  }
  return (
    <div className="flex">
      <select
        className="py-2 px-6 w-56 rounded-lg"
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
        <option value="subtitution">Substitution</option>
      </select>
    </div>
  )
}

export default Incidence
