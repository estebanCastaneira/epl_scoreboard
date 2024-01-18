import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setGoal } from "../../redux_config/incidencesSlice"

function DoItButton({ incidence, setIncidence, team, setTeam }) {
  const { isFirstHalf, isSecondHalf } = useSelector((state) => state.time)
  const [active, setActive] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    if (isFirstHalf || isSecondHalf) {
      return setActive(true)
    }
  }, [isFirstHalf, isSecondHalf])

  const handleOnClick = (event) => {
    // if (!active) return
    // if (!team) return
    if (incidence === "score") {
      dispatch(setGoal(team))
    }
  }

  return (
    <div className="self-end">
      <button
        className={`py-2 px-6 w-40 bg-green-400 rounded-lg hover:brightness-90 flex justify-center items-center ${
          !active && "pointer-events-none brightness-75"
        } `}
        onClick={handleOnClick}
      >
        Do it!
      </button>
    </div>
  )
}

export default DoItButton
