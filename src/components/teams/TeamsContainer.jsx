import Home from "./Team"
import Away from "./Team"
import LionLogo from "../lionlogo/LionLogo"
import { useSelector } from "react-redux"
function TeamsContainer() {
  const score = useSelector((state) => state.score)
  return (
    <div className="flex w-[100%] mx-auto my-0 relative">
      <Home
        name={"eve"}
        score={score.home}
        home={true}
        bgColor={"to-blue-950 via-blue-600"}
      />

      <LionLogo />

      <Away
        name={"liv"}
        score={score.away}
        home={false}
        bgColor={"to-red-950 via-red-600"}
      />
    </div>
  )
}

export default TeamsContainer
