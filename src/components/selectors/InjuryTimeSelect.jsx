import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { setInjuryTime } from "../../redux_config/timeSlice"
function InjuryTimeSelect() {
  const dispatch = useDispatch()
  const { injuryTime, time } = useSelector((state) => state.time)

  const [available, setAvailable] = useState(false)
  useEffect(() => {
    if ((time > 2100 && time < 2700) || (time > 4500 && time < 5400)) {
      setAvailable(true)
    } else {
      setAvailable(false)
    }
  }, [time])

  const handleOnChange = (event) => {
    const addition = Number(event.target.value)
    dispatch(setInjuryTime(addition))
  }
  return (
    <div className={`flex ${!available && "hidden"}`}>
      <select
        className="py-2 px-6 w-40 rounded-lg text-center"
        name="injuryTime"
        id="injuryTime"
        onChange={handleOnChange}
        disabled={injuryTime}
      >
        <option value="" selected disabled>
          Injury Time
        </option>
        <option value="60">1'</option>
        <option value="120">2'</option>
        <option value="180">3'</option>
        <option value="240">4'</option>
        <option value="300">5'</option>
        <option value="360">6'</option>
        <option value="420">7'</option>
      </select>
    </div>
  )
}

export default InjuryTimeSelect