export const showVariant = {
  hidden: { opacity: 0, y: -34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "smooth", delay: 0.2, duration: 0.5 },
  },
}

export const addedTimeTextVariant = {
  hidden: { x: -200, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "smooth", delay: 0.3, duration: 0.5 },
  },
  exit: { x: -200, opacity: 0 },
  styles: { overflow: "hidden", whiteSpace: "nowrap" },
}

export const addedTimeNumberVariant = {
  hidden: { x: 300, opacity: 0 },
  visible: {
    x: -10,
    opacity: 1,
    transition: { type: "smooth", delay: 0.3, duration: 0.5 },
  },
  exit: { x: 300, opacity: 0 },
  styles: { overflow: "hidden", whiteSpace: "nowrap" },
}

export const teamDisappear = (home, animateInjTime) => {
  const animation = {
    hidden: { x: 0 },
    visible: {
      x: home ? -80 : 80,
      opacity: 0,
      transition: { type: "smooth", delay: 0.3, duration: 0.5 },
    },
    exit: { x: 0 },
    style: { overflow: "hidden", whiteSpace: "nowrap" },
  }
  if (animateInjTime) return animation
}

export const scoreDisappear = (home, animateInjTime) => {
  const animation = {
    hidden: { x: 0, opacity: 1 },
    visible: {
      x: home ? 50 : -50,
      opacity: 0,
      transition: { type: "smooth", delay: 0.3, duration: 0.5 },
    },
    exit: { x: 0, opacity: 1 },
    style: { overflow: "hidden", whiteSpace: "nowrap" },
  }
  if (animateInjTime) return animation
}
