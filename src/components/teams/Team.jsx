function Team({ name, score, bgColor, secondColor, home }) {
  return (
    <div
      className={`px-2  ${
        home ? "bg-gradient-to-r" : "bg-gradient-to-l"
      } from-transparent ${bgColor} flex items-center justify-end w-[100%] text-white relative 
      ${home && "flex-row-reverse"} h-10`}
    >
      <p
        className={`${
          home ? "right-10" : "left-10"
        } text-7xl font-bold absolute`}
      >
        {score}
      </p>
      <p
        className={`text-4xl font-bold uppercase tracking-widest top-1 absolute ${
          home ? "left-6" : "right-6"
        }`}
      >
        {name}
      </p>
    </div>
  )
}

export default Team
