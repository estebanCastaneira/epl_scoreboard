import Timer from "../timer/Timer"
import TeamsContainer from "../teams/TeamsContainer"
function Scoreboard() {
  return (
    <div className="flex flex-col items-center justify-center  md:w-[48%] w-[100%]">
      <TeamsContainer />
      <Timer />
    </div>
  )
}

export default Scoreboard
