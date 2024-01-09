import Scoreboard from "./components/scoreboard/Scoreboard"
import "./assets/styles/app.css"
import "./assets/styles/fonts.css"
function App() {
  return (
    <>
      <div className="flex items-center justify-center min-h-svh font-radikal bg-green-300">
        <Scoreboard />
      </div>
    </>
  )
}

export default App
