import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import getMinute from "../../functions/getMinute"
import Incidence from "./Incidence"

function Display() {
  const { globalIncidences } = useSelector((state) => state.incidences)
  const { isStarted, isFinished, time, injuryTime } = useSelector(
    (state) => state.time
  )

  const [minutes, setMinutes] = useState()

  useEffect(() => {
    if (isFinished) {
      setMinutes(getMinute(time, injuryTime))
    }
  }, [isFinished, time, injuryTime])

  return (
    <div
      className={`h-[900px] sm:h-100 w-[90%] px-3 bg-white bg-blur-lg bg-opacity-20 rounded-lg overscroll-y-contain overflow-auto relative text-white text-xs sm:text-sm ${
        isStarted ? "pt-10" : "pt-3"
      } ${isFinished ? "pb-10" : "pb-3"}`}
    >
      <div>
        {globalIncidences &&
          globalIncidences.map((inc, i) => <Incidence key={i} inc={inc} />)}
      </div>

      <div
        className={`flex flex-col items-center z-10 justify-center absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-5 ${
          !isFinished && "hidden"
        }`}
      >
        <img
          className="w-6"
          src="/icons/whistle.png"
          alt="whistle icon"
          typeof="png"
        />
        <p>{minutes}' Match Finished!</p>
      </div>
      <div
        className={`flex flex-col items-center z-10 justify-center absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
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
    </div>
  )
}

export default Display
