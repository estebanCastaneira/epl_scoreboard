function Team({ team, setTeam }) {
  const handleOnChange = (event) => {
    setTeam(event.target.value)
  }
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="team">Team:</label>
      <select
        value={team}
        onChange={handleOnChange}
        className="py-2 px-6 w-40 rounded-lg"
        name="team"
        id="team"
      >
        <option value=""></option>
        <option value="home">Everton</option>
        <option value="away">Liverpool</option>
      </select>
    </div>
  )
}

export default Team
