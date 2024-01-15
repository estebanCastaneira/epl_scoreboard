function Team({ name, score, firstColor, secondColor, home }) {
  return (
    <div
      className={`px-2 ${firstColor} flex items-center justify-end w-[100%] text-white relative 
      ${home && "flex-row-reverse"} h-10`}
    >
      <p
        className={`${
          home ? "right-10" : "left-10"
        } text-7xl font-bold absolute`}
      >
        {score}
      </p>
      <p className="text-4xl font-bold uppercase tracking-widest top-1 absolute">
        {name}
      </p>
    </div>
  )
}

export default Team
