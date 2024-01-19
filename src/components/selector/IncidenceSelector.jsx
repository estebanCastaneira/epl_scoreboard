import { useState } from "react"
import Incidence from "./Incidence"
import Team from "./Team"
import GoForIt from "../buttons/GoForIt"
import Player from "./Player"
import Substitution from "./Substitution"

function IncidencesSelector() {
  const [incidence, setIncidence] = useState("")
  const [team, setTeam] = useState("")
  const [player, setPlayer] = useState("")
  const [substitution, setSubstitution] = useState("")

  return (
    <div className="flex flex-wrap sm:flex-row justify-center gap-2 items-center">
      <Incidence incidence={incidence} setIncidence={setIncidence} />
      <Team team={team} setTeam={setTeam} />
      <Player team={team} player={player} setPlayer={setPlayer} />
      {incidence === "substitution" && (
        <Substitution
          team={team}
          substitution={substitution}
          setSubstitution={setSubstitution}
        />
      )}
      <GoForIt
        incidence={incidence}
        setIncidence={setIncidence}
        team={team}
        setTeam={setTeam}
        player={player}
        setPlayer={setPlayer}
        substitution={substitution}
        setSubstitution={setSubstitution}
      />
    </div>
  )
}

export default IncidencesSelector
