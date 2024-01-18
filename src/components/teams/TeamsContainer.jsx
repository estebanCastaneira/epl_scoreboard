import Home from "./Team"
import Away from "./Team"
import LionLogo from "../lionlogo/LionLogo"
import { useSelector } from "react-redux"
function TeamsContainer() {
  const incidences = useSelector((state) => state.incidences)

  return (
    <div className="flex w-[100%] mx-auto my-0 relative">
      <Home
        name={"eve"}
        score={incidences.home.incidences.score}
        home={true}
        bgColor={"to-blue-950 via-blue-600"}
      />

      <LionLogo />

      <Away
        name={"liv"}
        score={incidences.away.incidences.score}
        home={false}
        bgColor={"to-red-950 via-red-600"}
      />
    </div>
  )
}

export default TeamsContainer
