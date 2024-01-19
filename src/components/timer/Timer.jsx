import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateTimer } from "../../redux_config/timeSlice"
import formatTime from "../../functions/formatTime"
function Timer() {
  const dispatch = useDispatch()
  const { time, isFirstHalf, isSecondHalf } = useSelector((state) => state.time)

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
    <div className="timer rounded-b-2xl w-44 h-10 flex justify-center items-center">
      <p className="text-white text-3xl font-bold tracking-widest time">
        {formatTime(time)}
      </p>
    </div>
  )
}

export default Timer
