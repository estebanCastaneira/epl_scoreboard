import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

function Display() {
  const eveIncidences = useSelector((state) => state.home.incidences.incidences)
  const livIncidences = useSelector((state) => state.away.incidences.incidences)
  const [homeInc, setHomeInc] = useState([])
  const [awayInc, setAwayInc] = useState([])

  useEffect(() => {
    setHomeInc(eveIncidences)
    setAwayInc(livIncidences)
  }, [eveIncidences, livIncidences])
  return (
    <div className="h-[38vh] sm:h-[50vh] w-[90%] sm:w-[80%] p-3 flex justify-around bg-white bg-blur-lg bg-opacity-20 rounded-lg overscroll-y-contain overflow-auto">
      <div className="border-r border-slate-200 w-[100%]">
        {homeInc.map((inc, i) => (
          <p key={i}>inc</p>
        ))}
      </div>
      <div className="w-[100%]">
        {awayInc.map((inc, i) => (
          <p key={i}>inc</p>
        ))}
      </div>
    </div>
  )
}

export default Display
