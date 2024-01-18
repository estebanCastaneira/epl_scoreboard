import { useDispatch, useSelector } from "react-redux"
import { resetTimer } from "../../redux_config/timeSlice"
import { useEffect, useState } from "react"
import { resetTeams } from "../../redux_config/incidencesSlice"
function ResetButton() {
  const { isFinished } = useSelector((state) => state.time)
  const dispatch = useDispatch()
  const [btnState, setBtnState] = useState(false)

  const handleResetTime = () => {
    dispatch(resetTimer())
    dispatch(resetTeams())
  }
  useEffect(() => {
    setBtnState(isFinished)
  }, [isFinished])

  return (
    <div>
      <button
        className={`py-2 px-6 w-40 bg-slate-200 rounded-lg hover:brightness-90 flex justify-center items-center  ${
          !btnState && "hidden pointer-events-none cursor-none brightness-75"
        }`}
        onClick={handleResetTime}
      >
        Start Over?
      </button>
    </div>
  )
}
export default ResetButton
