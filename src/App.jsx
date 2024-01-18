import Scoreboard from "./components/scoreboard/Scoreboard"
import StartButton from "./components/buttons/StartButton"
import ResetButton from "./components/buttons/ResetButton"
import IncidencesSelector from "./components/selector/IncidenceSelector"
import "./assets/styles/app.css"
import "./assets/styles/fonts.css"
import Display from "./components/display/Display"
function App() {
  return (
    <>
      <div className="app font-radikal">
        <div className="flex flex-col items-center gap-14 my-10">
          <Scoreboard />
          <Display />
          <div className="flex flex-col justify-center items-center gap-3 sm:flex-row">
            <StartButton />
            <ResetButton />
          </div>
          <IncidencesSelector />
        </div>
      </div>
    </>
  )
}

export default App
