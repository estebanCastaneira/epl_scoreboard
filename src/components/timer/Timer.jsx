import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { firstTime, updateTimer } from "../../redux_config/timeSlice"
function Timer() {
  const dispatch = useDispatch()
  const { initialTime, isRunning } = useSelector((state) => state.time)

  useEffect(() => {
    let timerInterval

    if (isRunning) {
      timerInterval = setInterval(() => {
        dispatch(updateTimer())
      }, 1000)
    }

    return () => clearInterval(timerInterval)
  }, [dispatch, isRunning])

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`
  }
  return (
    <div className="timer rounded-b-2xl w-44 h-10 flex justify-center items-center">
      <p className="text-white text-3xl font-bold tracking-widest time">
        {formatTime(initialTime)}
      </p>
    </div>
  )
}

export default Timer
