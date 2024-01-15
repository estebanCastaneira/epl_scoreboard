import Home from "./Team"
import Away from "./Team"
import LionLogo from "../lionlogo/LionLogo"
function TeamsContainer() {
  return (
    <div className="flex w-[100%] mx-auto my-0 relative">
      <Home name={"eve"} score={0} home={true} firstColor={"blue"} />
      <div>{/* <LionLogo /> */}</div>
      <Away name={"liv"} score={1} home={false} firstColor={"red"} />
    </div>
  )
}

export default TeamsContainer
