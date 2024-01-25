function Team({ team, setTeam }) {
  const handleOnChange = (event) => {
    setTeam(event.target.value)
  }
  return (
    <div className="flex">
      <select
        value={team}
        onChange={handleOnChange}
        className="py-2 px-6 w-56 rounded-lg text-center"
        name="team"
        id="team"
      >
        <option value="" selected disabled>
          Pick a Team
        </option>
        <option value="home">Everton</option>
        <option value="away">Liverpool</option>
      </select>
    </div>
  )
}

export default Team
