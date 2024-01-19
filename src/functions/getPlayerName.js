function getPlayerName(name) {
  // Utilizar una expresión regular para quitar números y guiones
  const cleanName = name.replace(/[0-9-]/g, "").trim()

  return cleanName
}

export default getPlayerName
