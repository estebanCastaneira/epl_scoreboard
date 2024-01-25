import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateTimer } from "../../redux_config/timeSlice"
import formatTime from "../../functions/formatTime"
function Timer() {
  const dispatch = useDispatch()
  const { time, isFirstHalf, isSecondHalf, injuryTime } = useSelector(
    (state) => state.time
  )
  const [square, setSquare] = useState(false)

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
    <div
      className={`timer w-44 h-10 flex justify-center items-center ${
        injuryTime ? "rounded-none" : "rounded-b-2xl"
      }`}
    >
      <p className="text-white text-3xl font-bold tracking-widest time">
        {formatTime(time)}
      </p>
    </div>
  )
}

export default Timer
