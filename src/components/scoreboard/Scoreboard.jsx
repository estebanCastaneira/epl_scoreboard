import Timer from "../timer/Timer"
import TeamsContainer from "../teams/TeamsContainer"
import InjuryTime from "../timer/InjuryTime"
function Scoreboard() {
  return (
    <div className="flex flex-col items-center justify-center  md:w-[48%] w-[100%]">
      <TeamsContainer />
      <Timer />
      <InjuryTime />
    </div>
  )
}

export default Scoreboard
