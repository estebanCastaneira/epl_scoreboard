import { useSelector } from "react-redux"
import { motion } from "framer-motion"

function Team({ name, score, bgColor, home }) {
  const animateInjTime = useSelector((state) => state.animation.injuryTime)
  const { injuryTime } = useSelector((state) => state.time)
  return (
    <div
      className={`px-2 flex items-center justify-end w-[100%] text-white relative 
      h-9 custom:h-11 overflow-hidden ${
        home
          ? "bg-gradient-to-r rounded-l-md flex-row-reverse"
          : "bg-gradient-to-l rounded-r-md"
      }  ${bgColor} `}
    >
      {animateInjTime && home && (
        <motion.p
          variants={""}
          initial=""
          animate=""
          className={`custom:text-4xl text-sm font-bold tracking-widest top-3 absolute ${
            home ? "left-6" : "right-6"
          }`}
        >
          Added Time
        </motion.p>
      )}
      {animateInjTime && !home && (
        <motion.p
          variants={""}
          initial=""
          animate=""
          className={`${
            home ? "left-6" : "right-6"
          } custom:text-7xl text-6xl font-bold absolute z-50 custom:bottom-[-1.1rem] bottom-[-0.95rem]`}
        >
          +{injuryTime / 60}'
        </motion.p>
      )}
      <motion.p
        variants={""}
        initial=""
        animate=""
        className={`${
          home ? "right-10" : "left-10"
        } custom:text-7xl text-6xl font-bold absolute z-50 custom:bottom-[-1.1rem] bottom-[-0.95rem]`}
      >
        {score}
      </motion.p>
      <motion.p
        variants={""}
        initial=""
        animate=""
        className={`custom:text-5xl text-3xl font-bold uppercase tracking-widest top-1 absolute ${
          home ? "left-6" : "right-6"
        }`}
      >
        {name}
      </motion.p>
    </div>
  )
}

export default Team
