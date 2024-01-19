import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import playersArray from "../../functions/playersArray"

function Player(team) {
  const [selectedTeamPlayers, setSelectedTeamPlayers] = useState([])
  const everton = useSelector((state) => state.incidences.home.lineup)
  const liverpool = useSelector((state) => state.incidences.away.lineup)
  useEffect(() => {
    const players =
      team.team === "home"
        ? playersArray(everton)
        : team.team === "away"
        ? playersArray(liverpool)
        : []

    setSelectedTeamPlayers(players)
  }, [team.team, everton, liverpool])

  return (
    <div className="flex flex-col gap-1">
      <select
        className="py-2 px-2 w-56 rounded-lg text-center"
        name="team"
        id="team"
      >
        <option value="" selected disabled>
          Pick a Player
        </option>
        {selectedTeamPlayers.length === 0 ? (
          <option selected disabled>
            Select a Team
          </option>
        ) : (
          selectedTeamPlayers.map((player, i) => (
            <option key={i} value={player}>
              {player}
            </option>
          ))
        )}
      </select>
    </div>
  )
}
export default Player
