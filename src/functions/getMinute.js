function getMinute(time, injuryTime = 0) {
  const minutes = Math.floor((time + injuryTime) / 60)

  return `${String(minutes)}`
}

export default getMinute
