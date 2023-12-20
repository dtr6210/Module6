import { useState } from "react";
import "../styles/Emoji.css";

function Emoji() {
  const [mood, setMood] = useState("😊");
  console.log(mood);

  const handleMoodChange = () => {
    let newMood = "😎";
    if (mood === "😎") {
      newMood = "😱";
    } else if (mood === "😱") {
      newMood = "😷";
    }

    setMood(newMood);
  };

  return (
    <div className="emoji-container">
        <div className="emoji">
      Current Mood: {mood}
      <button onClick={handleMoodChange}>Click and change me!</button>
      </div>
    </div>
  );
}

export default Emoji;
