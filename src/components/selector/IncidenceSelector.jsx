import { useState } from "react"
import Incidence from "./Incidence"
import Team from "./Team"
import GoForIt from "../buttons/GoForIt"
import Player from "./Player"

function IncidencesSelector() {
  const [incidence, setIncidence] = useState("")
  const [team, setTeam] = useState("")

  return (
    <div className="flex flex-wrap sm:flex-row justify-center gap-2 items-center">
      <Incidence incidence={incidence} setIncidence={setIncidence} />
      <Team team={team} setTeam={setTeam} />
      <Player team={team} />
      <GoForIt
        incidence={incidence}
        setIncidence={setIncidence}
        team={team}
        setTeam={setTeam}
      />
    </div>
  )
}

export default IncidencesSelector
