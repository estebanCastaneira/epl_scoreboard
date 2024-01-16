import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateTimer } from "../../redux_config/timeSlice"
function Timer() {
  const dispatch = useDispatch()
  const { time, isFirstTime, isSecondTime } = useSelector((state) => state.time)

  useEffect(() => {
    let timerInterval

    if (isFirstTime) {
      timerInterval = setInterval(() => {
        dispatch(updateTimer())
      }, 1000)
    }
    if (isSecondTime) {
      timerInterval = setInterval(() => {
        dispatch(updateTimer())
      }, 1000)
    }

    return () => clearInterval(timerInterval)
  }, [dispatch, isFirstTime, isSecondTime])

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    const initialTime = time % 60
    return `${String(minutes).padStart(2, "0")}:${String(initialTime).padStart(
      2,
      "0"
    )}`
  }
  return (
    <div className="timer rounded-b-2xl w-44 h-10 flex justify-center items-center">
      <p className="text-white text-3xl font-bold tracking-widest time">
        {formatTime(time)}
      </p>
    </div>
  )
}

export default Timer
