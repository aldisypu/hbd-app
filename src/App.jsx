import Particles from "react-particles";
import { loadStarsPreset } from "tsparticles-preset-stars";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
import Countdown from "react-countdown";

function App() {
  const [happyBirthdayMessage, setHappyBirthdayMessage] = useState(["Waiting for birthday..."]);
  const particleInitialization = async (engine) => {
    await loadStarsPreset(engine);
  };

  function timeLeft() {
    const happyBirthdayDate = new Date("July 8, 2024 00:00:00").getTime();
    const nowDate = new Date().getTime();
    const remainingTime = happyBirthdayDate - nowDate;
    return remainingTime;
  }

  function calculateAge() {
    const birthdate = new Date("July 8, 2002");
    const currentDate = new Date();
    let age = currentDate.getFullYear() - birthdate.getFullYear();
    const monthDiff = currentDate.getMonth() - birthdate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthdate.getDate())) {
      age--;
    } 
    
    return age;
    
  }

function countDays() {
  const currentDate = new Date();
  const birthdate = new Date("July 8, 2002");
  const oneDay = 24 * 60 * 60 * 1000;
  const daysCount = Math.floor((currentDate - birthdate) / oneDay);
  return daysCount;
}

  return (
    <>
      <Particles init={particleInitialization} options={{ preset: "stars" }} />

      <div className="flex flex-col justify-center items-center min-h-screen gap-4">
        <span className="text-white text-4xl font-bold z-50">
          <Typewriter words={happyBirthdayMessage} loop={false} cursorStyle={"_"} cursor />
        </span>
        <div className="z-50 text-white font-bold text-2xl">
          <Countdown
            date={Date.now() + timeLeft()}
            onComplete={() =>
              setHappyBirthdayMessage([
                "Happy",
                "Birthday",
                "My Queen 👑",
                `${calculateAge()} Years Old!`,
                `${countDays()} Days Old!`,
              ])
            }
          />
        </div>

        <div className="z-50 text-white font-bold text-xl">
          <p>Age: {calculateAge()} years</p>
          <p>Count Days: {countDays()} days</p>
        </div>
      </div>
    </>
  );
}

export default App;
