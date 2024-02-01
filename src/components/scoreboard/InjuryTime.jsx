import { useSelector } from "react-redux"
import { motion } from "framer-motion"
import { showVariant } from "../../animations/injuryTimeAnimations"

function InjuryTime() {
  const { injuryTime } = useSelector((state) => state.time)
  const animate = useSelector((state) => state.animation.injuryTime)

  return (
    <motion.div
      variants={showVariant}
      initial="hidden"
      animate={animate ? "visible" : ""}
      className="injury-time rounded-b-lg w-44 h-10 flex justify-center items-center z[-1]"
    >
      <p className="text-white text-2xl font-bold tracking-widest">
        +{injuryTime && injuryTime / 60}'
      </p>
    </motion.div>
  )
}

export default InjuryTime
