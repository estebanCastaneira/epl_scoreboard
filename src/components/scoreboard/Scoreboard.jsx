import Timer from "../timer/Timer"
import TeamsContainer from "../teams/TeamsContainer"
import InjuryTime from "./InjuryTime"
import Notification from "./Notification"
function Scoreboard() {
  return (
    <div className="flex flex-col items-center justify-center w-[100%] pointer-events-none">
      <TeamsContainer />
      <Timer />
      <InjuryTime />
      <Notification />
    </div>
  )
}

export default Scoreboard
