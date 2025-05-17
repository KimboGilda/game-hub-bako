import './App.css'
import {useState} from "react";
import {Button} from "@/components/ui/button.tsx";

function App() {
    const [mode, setMode] = useState<"dark" | "light">("light")

    const changeMode = () => {
        setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
        console.log(`Change mode: ${mode}`);
    };

    const icon = mode === "dark" ? "☀︎" : "🌙";

  return (
      <div className={`container-main ${mode === "dark" ? "dark-mode" : "light-mode"}`}>
        <div className="navigation">
            <img className="navbar-logo" src="src/assets/logo.webp" alt="navbar-logo"/>
            <Button
                size="icon"
                onClick={changeMode}>
                {icon}
            </Button>
        </div>
        <div className="panels">
            <div className="side-panel">
                <h3>Side panel</h3>
            </div>
            <div className="main-panel">
                <p>Main area</p>
            </div>
        </div>
    </div>
  )
}

export default App
