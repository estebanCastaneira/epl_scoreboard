import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import playersArray from "../../functions/playersArray"

function Player({ team, player, setPlayer }) {
  const [selectedTeamPlayers, setSelectedTeamPlayers] = useState([])
  const everton = useSelector((state) => state.incidences.home.lineup)
  const liverpool = useSelector((state) => state.incidences.away.lineup)
  console.log(team)
  useEffect(() => {
    const players =
      team === "home"
        ? playersArray(everton)
        : team.team === "away"
        ? playersArray(liverpool)
        : []

    setSelectedTeamPlayers(players)
  }, [team, everton, liverpool])

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
      >
        {selectedTeamPlayers.length === 0 ? (
          <option selected disabled>
            Select a Team
          </option>
        ) : (
          <>
            <option selected disabled>
              Pick a Player
            </option>
            {selectedTeamPlayers.map((player, i) => (
              <option key={i} value={player}>
                {player}
              </option>
            ))}
          </>
        )}
      </select>
    </div>
  )
}
export default Player
