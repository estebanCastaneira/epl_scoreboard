import { useDispatch, useSelector } from "react-redux"
import { firstHalf, secondHalf } from "../../redux_config/timeSlice"
import { useEffect, useState } from "react"
function StartButton({}) {
  const dispatch = useDispatch()
  const { isFirstHalf, isSecondHalf, isTimeUp, isFinished } = useSelector(
    (state) => state.time
  )
  const [btnTxt, setBtnTxt] = useState()

  const handleStartTime = () => {
    if (!isFirstHalf && !isSecondHalf && !isTimeUp) {
      dispatch(firstHalf())
    }
    if (isTimeUp) {
      dispatch(secondHalf())
    }
  }
  useEffect(() => {
    const btnState = isFinished
      ? "Finished!"
      : isFirstHalf
      ? "1st Time!"
      : isSecondHalf
      ? "2nd Time!"
      : isTimeUp
      ? "Start 2nd Half!"
      : "Start Match"
    setBtnTxt(btnState)
  }, [isFirstHalf, isSecondHalf, isTimeUp, isFinished])
  return (
    <div>
      <button
        className={`py-2 px-6 bg-slate-200 rounded-lg hover:brightness-90 flex justify-center items-center ${
          (isFirstHalf || isSecondHalf || isFinished) &&
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
