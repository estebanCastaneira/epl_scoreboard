import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { motion } from "framer-motion"

function Notification() {
  const globalIncidences = useSelector(
    (state) => state.incidences.globalIncidences
  )
  const [team, setTeam] = useState()
  const [incidence, setIncidence] = useState()
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
    const lastTeam = globalIncidences[0].team
    setTeam(lastTeam)

    const lastIncidence = globalIncidences[0].incidence
    setIncidence(lastIncidence)

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
      className=""
    >
      <div className="px-4 py-2 bg-slate-200 z-[-10] h-10 rounded-b-xl">
        <p>{incidence}</p>
      </div>
    </motion.div>
  )
}
export default Notification
