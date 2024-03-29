import Scoreboard from "./components/scoreboard/Scoreboard"
import StartButton from "./components/buttons/StartButton"
import ResetButton from "./components/buttons/ResetButton"
import PanelSelector from "./components/selectors/PanelSelector"
import "./assets/styles/app.css"
import "./assets/styles/fonts.css"
import Display from "./components/display/Display"
import InjuryTimeSelect from "./components/selectors/InjuryTimeSelect"
function App() {
  return (
    <>
      <div className="app font-radikal flex flex-col gap-5 items-center px-2">
        <Scoreboard />
        <div className="flex flex-col justify-center items-center gap-3 mt-2 sm:flex-row">
          <StartButton />
          <ResetButton />
          <InjuryTimeSelect />
        </div>
        <Display />
        <PanelSelector />
      </div>
    </>
  )
}

export default App
