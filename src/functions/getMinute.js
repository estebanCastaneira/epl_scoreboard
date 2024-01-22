function getMinute(time) {
  const minutes = Math.floor(time / 60)
  return `'${String(minutes)}`
}

export default getMinute
