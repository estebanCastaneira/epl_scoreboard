import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { motion } from "framer-motion"

function Notification() {
  const globalIncidences = useSelector(
    (state) => state.incidences.globalIncidences
  )
  const dispatch = useDispatch()

  useEffect(() => {
    if (globalIncidences.length === 0) {
      return
    }
    const lastIncidence = globalIncidences[0].incidence
    const team = globalIncidences[0].team
    console.log(globalIncidences[0])
    if (lastIncidence === "yellowCard") {
    }
    if (lastIncidence === "redCard") {
    }
    if (lastIncidence === "substitution") {
    }
  }, [globalIncidences])
  return (
    <motion.div>
      <div className="hidden">
        <h2>Esto es Nacional</h2>
      </div>
    </motion.div>
  )
}
export default Notification
