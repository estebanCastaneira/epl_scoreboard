import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
function Substitution({ team, substitution, setSubstitution }) {
  const [selectedTeamPlayers, setSelectedTeamPlayers] = useState([])
  const everton = useSelector((state) => state.incidences.home.lineup.bench)
  const liverpool = useSelector((state) => state.incidences.away.lineup.bench)
  useEffect(() => {
    const players =
      team === "home" ? everton : team.team === "away" ? liverpool : []
    setSelectedTeamPlayers(players)
  }, [team, everton, liverpool])

  const handleOnChange = (event) => {
    setSubstitution(event.target.value)
  }
  return (
    <div className="flex">
      <select
        className="py-2 px-2 w-56 rounded-lg text-center"
        name="subtitution"
        id="substitution"
        onChange={handleOnChange}
      >
        <option selected disabled>
          Pick a Player
        </option>
        {selectedTeamPlayers.map((player, i) => (
          <option key={i} value={player}>
            {player}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Substitution
