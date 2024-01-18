function Display() {
  return (
    <div className="h-[370px] w-[95%] flex justify-around bg-white bg-blur-lg bg-opacity-20 rounded-lg overscroll-y-contain overflow-auto">
      <div className="border-r border-slate-200 w-[100%]">
        <p className="text-white p-2 text-center">Home</p>
      </div>
      <div className="w-[100%]">
        <p className="text-white p-2 text-center">Away</p>
      </div>
    </div>
  )
}

export default Display
