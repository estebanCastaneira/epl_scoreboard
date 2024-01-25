import { useSelector } from "react-redux"
function InjuryTime() {
  const { injuryTime } = useSelector((state) => state.time)
  return (
    <div
      className={`injury-time rounded-b-2xl w-44 h-10 flex justify-center items-center ${
        !injuryTime && "hidden"
      }`}
    >
      <p className="text-white text-2xl font-bold tracking-widest">
        +{injuryTime && injuryTime / 60}'
      </p>
    </div>
  )
}

export default InjuryTime
