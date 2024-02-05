import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateTimer } from "../../redux_config/timeSlice"
import InjuryTime from "./InjuryTime"
import formatTime from "../../functions/formatTime"
function Timer() {
  const dispatch = useDispatch()
  const { time, isFirstHalf, isSecondHalf, injuryTime } = useSelector(
    (state) => state.time
  )

  useEffect(() => {
    let timerInterval

    if (isFirstHalf) {
      timerInterval = setInterval(() => {
        dispatch(updateTimer())
      }, 1000)
    }
    if (isSecondHalf) {
      timerInterval = setInterval(() => {
        dispatch(updateTimer())
      }, 1000)
    }

    return () => clearInterval(timerInterval)
  }, [dispatch, isFirstHalf, isSecondHalf])

  return (
    <div>
      <div
        className={`timer w-44 h-10 flex justify-center items-center relative z-10 ${
          injuryTime ? "rounded-none" : "rounded-b-lg"
        }`}
      >
        <p className="text-white text-3xl custom:text-4xl font-bold tracking-widest time">
          {formatTime(time)}
        </p>
      </div>
      <InjuryTime />
    </div>
  )
}

export default Timer
