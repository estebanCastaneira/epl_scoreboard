import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setGoal } from "../../redux_config/incidencesSlice"
import getPlayerName from "../../functions/getPlayerName"
import formatTime from "../../functions/formatTime"

function GoForIt({
  incidence,
  setIncidence,
  team,
  setTeam,
  player,
  setPlayer,
  substitution,
  setSubstitution,
}) {
  const { time, isFirstHalf, isSecondHalf, isHalfTime } = useSelector(
    (state) => state.time
  )
  const [active, setActive] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    if (isFirstHalf || isSecondHalf) {
      return setActive(true)
    }
    if (isHalfTime) {
      return setActive(false)
    }
  }, [isHalfTime, isFirstHalf, isSecondHalf])

  const handleOnClick = (event) => {
    // if (!active) return

    if (incidence === "score") {
      const playerName = getPlayerName(player)
      const formatTime = formatTime(time)
      setIncidence("")
      setTeam("")
      setPlayer("")
      setSubstitution("")
      dispatch(setGoal({ team: team, player: playerName, time: formatTime }))
    }
  }

  return (
    <div className="self-end">
      <button
        className={`py-2 px-6 w-56  bg-gradient-to-t from-green-400 via-green-500 to-green-600 rounded-lg hover:brightness-90 flex justify-center items-center ${
          !active && "pointer-events-none brightness-75"
        } `}
        onClick={handleOnClick}
      >
        Go For It!
      </button>
    </div>
  )
}

export default GoForIt