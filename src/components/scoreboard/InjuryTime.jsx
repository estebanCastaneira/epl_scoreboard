import { useSelector } from "react-redux"
import { motion } from "framer-motion"

const injuryTimeVariant = {
  hidden: { opacity: 0, y: -34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "smooth", delay: 0.2, duration: 0.5 },
  },
}
function InjuryTime() {
  const { injuryTime } = useSelector((state) => state.time)
  const animate = useSelector((state) => state.animation.injuryTime)

  return (
    <motion.div
      variants={injuryTimeVariant}
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
