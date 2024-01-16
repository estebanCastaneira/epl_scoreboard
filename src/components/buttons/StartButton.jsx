import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { firstTime } from "../../redux_config/timeSlice"
function StartButton({}) {
  const dispatch = useDispatch()
  const [btnTxt, setBtnTxt] = useState("Start Match!")

  const handleOnClick = () => {
    setBtnTxt("1st Time!")
    dispatch(firstTime("tamo acá"))
  }
  return (
    <div>
      <button
        className="py-2 px-6 bg-slate-200 rounded-lg hover:brightness-90"
        onClick={handleOnClick}
      >
        {btnTxt}
      </button>
    </div>
  )
}

export default StartButton
