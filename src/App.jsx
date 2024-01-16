import Scoreboard from "./components/scoreboard/Scoreboard"
import StartButton from "./components/buttons/StartButton"
import "./assets/styles/app.css"
import "./assets/styles/fonts.css"
function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-evenly min-h-svh font-radikal">
        <Scoreboard />
        <StartButton />
        <div className="app opacity-95"></div>
      </div>
    </>
  )
}

export default App
