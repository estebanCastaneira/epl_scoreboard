import epl_logo from "/img/pl-main-logo.png"
function LionLogo() {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2/3 z-50">
      <img src={epl_logo} className="w-16" alt="Premier League Main Logo" />
    </div>
  )
}

export default LionLogo
