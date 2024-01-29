import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import isUnavailable from "../../functions/isUnavailable"

function Player({ team, player, setPlayer }) {
  const [selectedTeamPlayers, setSelectedTeamPlayers] = useState([])

  const everton = useSelector((state) => state.incidences.home.lineup)
  const liverpool = useSelector((state) => state.incidences.away.lineup)

  useEffect(() => {
    const players = team === "" ? [] : team === "home" ? everton : liverpool

    setSelectedTeamPlayers(players)
  }, [team, everton, liverpool, setPlayer])

  const handleOnChange = (event) => {
    setPlayer(event.target.value)
  }

  return (
    <div className="flex">
      <select
        className="py-2 px-2 w-56 rounded-lg text-center"
        name="team"
        id="team"
        onChange={handleOnChange}
        value={player}
      >
        <option value="" selected disabled>
          Pick a Player
        </option>
        {selectedTeamPlayers.map((player, i) => (
          <option key={i} value={player} disabled={isUnavailable(player)}>
            {player}
          </option>
        ))}
      </select>
    </div>
  )
}
export default Player
