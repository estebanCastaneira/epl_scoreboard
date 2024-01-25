import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import formatTime from "../../functions/formatTime"

function Display() {
  const eveIncidences = useSelector((state) => state.incidences.home.incidences)
  const livIncidences = useSelector((state) => state.incidences.away.incidences)
  const { isStarted, isFinished, time, injuryTime } = useSelector(
    (state) => state.time
  )

  const [homeInc, setHomeInc] = useState([])
  const [awayInc, setAwayInc] = useState([])

  useEffect(() => {
    setHomeInc(eveIncidences)
    setAwayInc(livIncidences)
  }, [eveIncidences, livIncidences])
  return (
    <div
      className={`h-[38vh] sm:h-[50vh] w-[90%] sm:w-[80%]  px-3 flex justify-around bg-white bg-blur-lg bg-opacity-20 rounded-lg overscroll-y-contain overflow-auto relative text-white text-xs sm:text-sm ${
        isStarted ? "pt-10" : "pt-3"
      } ${isFinished ? "pb-10" : "pb-3"}`}
    >
      <div
        className={`flex flex-col items-center z-10 justify-center absolute top-0 ${
          !isStarted && "hidden"
        }`}
      >
        <img
          className="w-6"
          src="/icons/whistle.png"
          alt="whistle icon"
          typeof="png"
        />
        <p>0' Match Start!</p>
      </div>

      <div className="border-r border-slate-200 w-[100%]">
        {/* {homeInc.map((inc, i) => (
          <p key={i}>inc</p>
        ))} */}
      </div>
      <div className="w-[100%]">
        {/* {awayInc.map((inc, i) => (
          <p key={i}>inc</p>
        ))} */}
      </div>
      <div
        className={`flex flex-col items-center z-10 justify-center absolute bottom-0 ${
          !isFinished && "hidden"
        }`}
      >
        <img
          className="w-6"
          src="/icons/whistle.png"
          alt="whistle icon"
          typeof="png"
        />
        <p>{String((time + injuryTime) / 60)}' Match Finished!</p>
      </div>
    </div>
  )
}

export default Display
