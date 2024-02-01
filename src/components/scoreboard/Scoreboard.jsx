import Timer from "./Timer"
import TeamsContainer from "../teams/TeamsContainer"
import InjuryTime from "./InjuryTime"
import Notification from "./Notification"
function Scoreboard() {
  return (
    <div className="flex flex-col items-center justify-center w-[95%] sm:w-[70%] md:w-[60%] lg:w-[50%] pointer-events-none">
      <TeamsContainer />
      <Timer />
      <InjuryTime />
      <Notification />
    </div>
  )
}

export default Scoreboard
