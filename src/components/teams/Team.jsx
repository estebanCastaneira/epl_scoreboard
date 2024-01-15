function Team({ name, score, firstColor, secondColor, home }) {
  return (
    <div
      className={`bg-${firstColor}-600 flex items-center justify-end  w-[100%] text-white relative 
      ${home && "flex-row-reverse"} h-14`}
    >
      <p
        className={`${
          home ? "right-12" : "left-12"
        } sm:text-9xl text-8xl font-bold absolute lef`}
      >
        {score}
      </p>
      <p className="sm:text-6xl text-4xl font-bold uppercase absolute">
        {name}
      </p>
    </div>
  )
}

export default Team
