import { useState } from "react"
import Incidence from "./Incidence"
import Team from "./Team"
import DoItButton from "../buttons/DoItButton"
function IncidencesSelector() {
  const [incidence, setIncidence] = useState("")
  const [team, setTeam] = useState("")

  return (
    <div className="flex flex-wrap sm:flex-row justify-center gap-2 ">
      <Incidence incidence={incidence} setIncidence={setIncidence} />
      <Team team={team} setTeam={setTeam} />
      <DoItButton
        incidence={incidence}
        setIncidence={setIncidence}
        team={team}
        setTeam={setTeam}
      />
    </div>
  )
}

export default IncidencesSelector
