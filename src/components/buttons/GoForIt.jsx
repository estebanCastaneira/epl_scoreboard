import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  setGoal,
  setYellowCard,
  setRedCard,
  setSubstitutionSlice,
} from "../../redux_config/incidencesSlice"

import getMinute from "../../functions/getMinute"

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
  const [active, setActive] = useState(true)
  const dispatch = useDispatch()
  useEffect(() => {
    // if (isFirstHalf || isSecondHalf) {
    //   return setActive(true)
    // }
    // if (isHalfTime) {
    //   return setActive(false)
    // }
  }, [isHalfTime, isFirstHalf, isSecondHalf])

  const handleOnClick = (event) => {
    // if (!active) return

    if (incidence === "score" && team && player) {
      const minute = getMinute(time)
      setIncidence("")
      setTeam("")
      setPlayer("")
      dispatch(setGoal({ team, player, time: minute, incidence }))
    }
    if (incidence === "yellowCard" && team && player) {
      const minute = getMinute(time)
      setIncidence("")
      setTeam("")
      setPlayer("")
      dispatch(
        setYellowCard({
          team,
          player,
          time: minute,
          incidence,
        })
      )
    }
    if (incidence === "redCard" && team && player) {
      const minute = getMinute(time)
      setIncidence("")
      setTeam("")
      setPlayer("")
      dispatch(setRedCard({ team, player, time: minute, incidence }))
    }
    if (incidence === "substitution" && team && player && substitution) {
      const minute = getMinute(time)
      setIncidence("")
      setTeam("")
      setPlayer("")
      setSubstitution("")
      dispatch(
        setSubstitutionSlice({
          team,
          player,
          substitution,
          time: minute,
          incidence,
        })
      )
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
