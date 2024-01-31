import { useSelector } from "react-redux"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
function InjuryTime() {
  const { injuryTime } = useSelector((state) => state.time)
  const [visible, setVisible] = useState(false)
  const injuryTimeVariant = {
    hidden: { opacity: 0, y: -34 },
    visible: { opacity: 1, y: 0, transition: { type: "tween", delay: 0.3 } },
  }
  useEffect(() => {
    injuryTime > 0 ? setVisible(true) : setVisible(false)
  }, [injuryTime])

  return (
    <motion.div
      variants={injuryTimeVariant}
      initial="hidden"
      animate={visible ? "visible" : ""}
      className="injury-time rounded-b-2xl w-44 h-10 flex justify-center items-center z[-1]"
    >
      <p className="text-white text-2xl font-bold tracking-widest">
        +{injuryTime && injuryTime / 60}'
      </p>
    </motion.div>
  )
}

export default InjuryTime
