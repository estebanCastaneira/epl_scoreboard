import Scoreboard from "./components/scoreboard/Scoreboard"
import StartButton from "./components/buttons/StartButton"
import ResetButton from "./components/buttons/ResetButton"
import "./assets/styles/app.css"
import "./assets/styles/fonts.css"
import Display from "./components/display/Display"
function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-evenly min-h-svh font-radikal py-10">
        <Scoreboard />
        <Display />
        <div className="flex flex-col justify-center items-center gap-3 sm:flex-row">
          <StartButton />
          <ResetButton />
        </div>

        <div className="app opacity-95"></div>
      </div>
    </>
  )
}

export default App
