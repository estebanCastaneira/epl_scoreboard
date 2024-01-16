import { useSelector } from "react-redux"
function Timer() {
  const time = useSelector((state) => state.time)
  console.log(time)
  return (
    <div className="timer rounded-b-2xl w-44 h-10 flex justify-center items-center">
      <p className="text-white text-3xl font-bold tracking-widest time">
        {time}
      </p>
    </div>
  )
}

export default Timer
