import dayjs from "dayjs";
import { useEffect, useState } from "react";
import "./App.css";
import Clock from "./components/clock/clock";

let utc = require("dayjs/plugin/utc");
let timezone = require("dayjs/plugin/timezone");

function App() {
  dayjs.extend(timezone);
  dayjs.extend(utc);

  const [time, setTime] = useState(dayjs().format("HH:mm"));
  const [hour, setHour] = useState(parseInt(dayjs().format("HH")));
  const [day, setDay] = useState(true);
  const [welcomeString, setWelcomeString] = useState("");
  const [location, setLocation] = useState(dayjs.tz.guess());
  let timer = null;

  useEffect(() => {
    timer = setInterval(() => {
      setTime(dayjs().format("HH:mm"));
      setHour(parseInt(dayjs().format("HH")));
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (hour > 6 && hour < 18) {
      setWelcomeString("Good morning 🌞");
      setDay(true);
    } else {
      setWelcomeString("Good evening 🌜");
      setDay(false);
    }
  }, [hour]);

  return (
    <Clock
      time={time}
      welcomeString={welcomeString}
      location={location}
      day={day}
    />
  );
}

export default App;
