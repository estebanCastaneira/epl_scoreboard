import getPlayerName from "../../functions/getPlayerName"
function Incidence({ inc, i }) {
  return (
    <div key={i} className="block">
      <div
        className={`flex  items-center gap-2 my-3 relative ${
          inc.team === "home" ? "left-0 " : "right-0 flex-row-reverse"
        }`}
      >
        <img className="w-5" src={inc.icon} alt="incident image" />
        <p>{inc.time}</p>
        <p key={i} className={inc.substitution && "text-red-500"}>
          {getPlayerName(inc.player)}
        </p>
        {inc.substitution && (
          <p className="text-green-400">{getPlayerName(inc.substitution)}</p>
        )}
      </div>
    </div>
  )
}

export default Incidence
