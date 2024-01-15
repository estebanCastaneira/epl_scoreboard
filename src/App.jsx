import Scoreboard from "./components/scoreboard/Scoreboard"
import "./assets/styles/app.css"
import "./assets/styles/fonts.css"
function App() {
  return (
    <>
      <div className="flex items-center justify-center min-h-svh font-radikal">
        <Scoreboard />
        <div className="app"></div>
      </div>
    </>
  )
}

export default App
