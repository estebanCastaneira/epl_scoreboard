import Home from "./Team"
import Away from "./Team"
import LionLogo from "../lionlogo/LionLogo"
import { useSelector } from "react-redux"
function TeamsContainer() {
  const incidences = useSelector((state) => state.incidences)

  return (
    <div className="flex w-[100%] mx-auto my-0 relative z-30 transition-all">
      <Home
        name={"eve"}
        score={incidences.home.incidences.score}
        home={true}
        bgColor={"from-blue-700 to-blue-950"}
      />

      <LionLogo />

      <Away
        name={"liv"}
        score={incidences.away.incidences.score}
        home={false}
        bgColor={"from-red-700 to-red-950"}
      />
    </div>
  )
}

export default TeamsContainer
