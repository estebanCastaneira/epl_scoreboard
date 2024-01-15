import Home from "./Team"
import Away from "./Team"
import LionLogo from "../lionlogo/LionLogo"
function TeamsContainer() {
  return (
    <div className="flex w-[100%] mx-auto my-0 relative">
      <Home name={"eve"} score={0} home={true} firstColor={"bg-blue-600"} />

      <LionLogo />

      <Away name={"liv"} score={0} home={false} firstColor={"bg-red-600"} />
    </div>
  )
}

export default TeamsContainer
