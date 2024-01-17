import { useDispatch, useSelector } from "react-redux"
import { firstTime, secondTime } from "../../redux_config/timeSlice"
import { useEffect, useState } from "react"
function StartButton({}) {
  const dispatch = useDispatch()
  const { isFirstTime, isSecondTime, isTimeUp, isFinished } = useSelector(
    (state) => state.time
  )
  const [btnTxt, setBtnTxt] = useState()

  const handleStartTime = () => {
    if (!isFirstTime && !isSecondTime && !isTimeUp) {
      dispatch(firstTime())
    }
    if (isTimeUp) {
      dispatch(secondTime())
    }
  }
  useEffect(() => {
    const btnState = isFinished
      ? "Finished!"
      : isFirstTime
      ? "1st Time!"
      : isSecondTime
      ? "2nd Time!"
      : isTimeUp
      ? "Start 2nd Half!"
      : "Start Match"
    setBtnTxt(btnState)
  }, [isFirstTime, isSecondTime, isTimeUp, isFinished])
  return (
    <div>
      <button
        className={`py-2 px-6 bg-slate-200 rounded-lg hover:brightness-90 flex justify-center items-center ${
          (isFirstTime || isSecondTime || isFinished) &&
          "pointer-events-none cursor-none brightness-75"
        }`}
        onClick={handleStartTime}
      >
        {btnTxt}
      </button>
    </div>
  )
}

export default StartButton
