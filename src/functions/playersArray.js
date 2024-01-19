export default function playersArray(player) {
  const array = []
  array.push(...player.goalkeeper)
  array.push(...player.defenders)
  array.push(...player.midfielders)
  array.push(...player.forwards)

  return array
}
