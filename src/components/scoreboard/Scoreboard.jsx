import LionLogo from "../lionlogo/LionLogo"
import Timer from "../timer/Timer"
function Scoreboard() {
  return (
    <div className="flex flex-col items-center justify-center w-[90%]">
      <LionLogo />
      <Timer />
    </div>
  )
}

export default Scoreboard
