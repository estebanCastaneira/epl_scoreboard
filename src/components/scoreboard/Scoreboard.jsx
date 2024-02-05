import Timer from "../timer/Timer"
import TeamsContainer from "../teams/TeamsContainer"
import Notification from "./Notification"
function Scoreboard() {
  return (
    <div className="flex flex-col items-center justify-center w-[95%] sm:w-[80%]  lg:w-[60%] pointer-events-none">
      <TeamsContainer />
      <div>
        <Timer />
        <Notification />
      </div>
    </div>
  )
}

export default Scoreboard
