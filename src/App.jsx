import Scoreboard from "./components/scoreboard/Scoreboard"
import "./assets/styles/app.css"
import "./assets/styles/fonts.css"
function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-evenly min-h-svh font-radikal">
        <Scoreboard />
        <div className="app"></div>
      </div>
    </>
  )
}

export default App
