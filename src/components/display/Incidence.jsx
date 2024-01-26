function Incidence({ inc, i }) {
  return (
    <div key={i} className="block">
      <div
        className={`flex  items-center gap-2 my-3 relative ${
          inc.team === "home" ? "left-0 " : "right-0 flex-row-reverse"
        }`}
      >
        <img className="w-5" src={inc.icon} alt="incident image" />
        <p key={i}>{`${inc.time}  ${inc.player}`}</p>
      </div>
    </div>
  )
}

export default Incidence
