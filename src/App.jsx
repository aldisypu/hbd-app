import Particles from "react-particles";
import {loadStarsPreset} from "tsparticles-preset-stars"
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
import Countdown from "react-countdown";

function App() {
  const [happyBirthdayMessage, setHappyBirthdayMessage] = useState(["Waiting for birthday..."])
  const particleInitialization = async(engine) => {
    await loadStarsPreset(engine)
  }

  function timeLeft() {
    const happyBirthdayDate = new Date("July 8, 2024 00:00:00").getTime()
    const nowDate = new Date().getTime()
    const remainingTime = happyBirthdayDate - nowDate
    return remainingTime
  }

  return (
    <>
      <Particles 
        init={particleInitialization}
        options={{preset: "stars"}}
      />

      <div className="flex flex-col justify-center items-center min-h-screen gap-4">
        <span className="text-white text-4xl font-bold z-50">
          <Typewriter 
            words={happyBirthdayMessage} 
            loop={false}
            cursorStyle={"_"}
            cursor
          />
        </span>
        <div className="z-50 text-white font-bold text-2xl">
          <Countdown date={Date.now() + timeLeft()} onComplete={() => setHappyBirthdayMessage([
            "Happy", "Birthday", "My", "Queen 👑"
          ])}/>
        </div>
      </div>
    </>
  );
}

export default App
