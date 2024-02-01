function Team({ name, score, bgColor, home }) {
  return (
    <div
      className={`px-2 ${
        home ? "bg-gradient-to-r rounded-l-md" : "bg-gradient-to-l rounded-r-md"
      }  ${bgColor} flex items-center justify-end w-[100%] text-white relative 
      ${home && "flex-row-reverse"} h-9 custom:h-11`}
    >
      <p
        className={`${
          home ? "right-10" : "left-10"
        } custom:text-7xl text-6xl font-bold absolute z-50 custom:bottom-[-1.1rem] bottom-[-0.95rem]`}
      >
        {score}
      </p>
      <p
        className={`custom:text-5xl text-3xl font-bold uppercase tracking-widest top-1 absolute ${
          home ? "left-6" : "right-6"
        }`}
      >
        {name}
      </p>
    </div>
  )
}

export default Team
