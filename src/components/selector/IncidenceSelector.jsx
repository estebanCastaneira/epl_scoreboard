function IncidencesSelector() {
  return (
    <div className="flex flex-wrap sm:flex-row justify-center gap-2 ">
      <div className="flex flex-col gap-1">
        <label htmlFor="incidence">Incidence:</label>
        <select
          className="py-2 px-6 w-40 rounded-lg"
          name="incidence"
          id="incidence"
        >
          <option value=""></option>
          <option value="Goal">Goal!</option>
          <option value="Yellow Card">Yellow Card</option>
          <option value="Red Card">Red Card</option>
          <option value="Subtitution">Substitution</option>
        </select>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="team">Team:</label>
        <select className="py-2 px-6 w-40 rounded-lg" name="team" id="team">
          <option value=""></option>
          <option value="Everton">Everton</option>
          <option value="Liverpool">Liverpool</option>
        </select>
      </div>
      <div className="self-end">
        <button className="py-2 px-6 w-40 bg-green-400 rounded-lg hover:brightness-90 flex justify-center items-center">
          Do it!
        </button>
      </div>
    </div>
  )
}

export default IncidencesSelector
