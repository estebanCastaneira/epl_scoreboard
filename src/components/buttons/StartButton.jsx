import { useState } from "react"
function StartButton({}) {
  const [btnTxt, setBtnTxt] = useState("Start Match!")

  const handleOnClick = () => {
    setBtnTxt("1st Time")
  }
  return (
    <div>
      <button
        className="py-2 px-6 bg-slate-200 rounded-lg "
        onClick={handleOnClick}
      >
        {btnTxt}
      </button>
    </div>
  )
}

export default StartButton
