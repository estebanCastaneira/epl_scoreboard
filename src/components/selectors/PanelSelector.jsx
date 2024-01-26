import { useState } from "react"
import IncidenceSelect from "./IncidenceSelect"
import TeamSelect from "./TeamSelect"
import GoForIt from "../buttons/GoForIt"
import PlayerSelect from "./PlayerSelect"
import SubstitutionSelect from "./SubstitutionSelect"

function PanelSelector() {
  const [incidence, setIncidence] = useState("")
  const [team, setTeam] = useState("")
  const [player, setPlayer] = useState("")
  const [substitution, setSubstitution] = useState("")

  return (
    <div className="flex flex-wrap sm:flex-row justify-center gap-2 items-center">
      <TeamSelect team={team} setTeam={setTeam} />
      <IncidenceSelect
        incidence={incidence}
        setIncidence={setIncidence}
        team={team}
      />
      <PlayerSelect team={team} player={player} setPlayer={setPlayer} />
      {incidence === "substitution" && (
        <SubstitutionSelect
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

export default PanelSelector
