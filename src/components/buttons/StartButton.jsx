import { useDispatch, useSelector } from "react-redux"
import {
  firstHalf,
  secondHalf,
  setInjuryTime,
} from "../../redux_config/timeSlice"
import { useEffect, useState } from "react"
import { setInjuryTimeAnimation } from "../../redux_config/animationSlice"
function StartButton({}) {
  const dispatch = useDispatch()
  const { isFirstHalf, isSecondHalf, isHalfTime, isFinished } = useSelector(
    (state) => state.time
  )
  const [btnTxt, setBtnTxt] = useState()

  const handleStartTime = () => {
    if (!isFirstHalf && !isSecondHalf && !isHalfTime) {
      dispatch(firstHalf())
    }
    if (isHalfTime) {
      dispatch(setInjuryTime(0))
      dispatch(setInjuryTimeAnimation(false))
      dispatch(secondHalf())
    }
  }
  useEffect(() => {
    const btnState = isFinished
      ? "Finished!"
      : isFirstHalf
      ? "1st Half!"
      : isSecondHalf
      ? "2nd Half!"
      : isHalfTime
      ? "Start 2nd Half!"
      : "Start Match"
    setBtnTxt(btnState)
  }, [isFirstHalf, isSecondHalf, isHalfTime, isFinished])
  return (
    <div>
      <button
        className={`py-2 px-6 w-40 bg-slate-200 rounded-lg hover:brightness-90 flex justify-center items-center ${
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
