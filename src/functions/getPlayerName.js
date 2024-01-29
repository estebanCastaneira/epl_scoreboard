function getPlayerName(name) {
  const cleanName = name.replace(/[0-9-*]/g, "").trim()

  return cleanName
}

export default getPlayerName
