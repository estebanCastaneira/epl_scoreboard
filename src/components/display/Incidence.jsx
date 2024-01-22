function Incidence({ icon, player, time, home }) {
  return (
    <div className={`${home ? "" : ""}`}>
      <img src={icon} alt="incidence icon" />
      <p>{time + " " + player}</p>
    </div>
  )
}

export default Incidence
