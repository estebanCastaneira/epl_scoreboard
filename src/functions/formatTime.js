const formatTime = (time) => {
  const minutes = Math.floor(time / 60)
  const initialTime = time % 60
  return `${String(minutes).padStart(2, "0")}:${String(initialTime).padStart(
    2,
    "0"
  )}`
}

export default formatTime
