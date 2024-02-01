import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { motion } from "framer-motion"
import redCard from "/icons/red-card.png"

function Notification() {
  const globalIncidences = useSelector(
    (state) => state.incidences.globalIncidences
  )
  const [image, setImgae] = useState()
  const notificationVariant = {
    hidden: { x: 200, y: -150, opacity: 0 },
    visible: {
      x: 200,
      y: -80,
      opacity: 1,

      transition: { type: "smooth" },
    },
  }
  useEffect(() => {
    if (globalIncidences.length === 0) {
      return
    }
    const lastIncidence = globalIncidences[0].incidence
    const team = globalIncidences[0].team

    if (lastIncidence === "yellowCard") {
    }
    if (lastIncidence === "redCard") {
    }
    if (lastIncidence === "substitution") {
    }
  }, [globalIncidences])
  return (
    <motion.div
      variants={notificationVariant}
      initial="hidden"
      animate="visible"
      className="hidden"
    >
      <div className="px-4 py-2 bg-amber-100 z-[-10] rounded-b-xl sm:flex items-center gap-4  ">
        <img className="w-8" src={redCard} alt="incidence icon" />
        <p>Esto es Nacional</p>
      </div>
    </motion.div>
  )
}
export default Notification
