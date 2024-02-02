export const showVariant = {
  hidden: { opacity: 0, y: -34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "smooth", delay: 0.2, duration: 0.5 },
  },
}

export const addedTimeVariant = {
  hidden: { x: -30 },
  visible: { x: 0, transition: { type: "smooth", delay: 0.3, duration: 0.4 } },
  style: { overflow: "hidden", whiteSpace: "nowrap" },
}

export const addedTimeNumberVariant = {
  hidden: { x: -30 },
  visible: { x: 0, transition: { type: "smooth", delay: 0.3, duration: 0.4 } },
  style: { overflow: "hidden", whiteSpace: "nowrap" },
}

export const teamDissapear = (home) => {
  const animation = {
    hidden: { x: -30 },
    visible: {
      x: 0,
      transition: { type: "smooth", delay: 0.3, duration: 0.4 },
    },
    style: { overflow: "hidden", whiteSpace: "nowrap" },
  }
  return animation
}

export const scoreDissaper = (home) => {
  const animation = {
    hidden: { x: -30 },
    visible: {
      x: 0,
      transition: { type: "smooth", delay: 0.3, duration: 0.4 },
    },
    style: { overflow: "hidden", whiteSpace: "nowrap" },
  }
  return animation
}
