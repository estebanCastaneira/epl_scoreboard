import epl_logo from "/img/epl_lion_logo.png"
function LionLogo() {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
      <img src={epl_logo} className="sm:mb-12" />
    </div>
  )
}

export default LionLogo
