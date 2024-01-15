import epl_logo from "/img/epl_lion_logo.png"
function LionLogo() {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2/3 z-10">
      <img src={epl_logo} className="w-20" />
    </div>
  )
}

export default LionLogo
