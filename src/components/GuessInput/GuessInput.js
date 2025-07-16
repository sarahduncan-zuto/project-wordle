import React from "react";

function GuessInput() {
  const [guess, setGuess] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (guess.length !== 5) {
      alert("Guess must be exactly 5 letters long.");
      return;
    }
    console.log("Guess submitted:", guess);
    setGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter your guess:</label>
      <input
        type="text"
        id="guess-input"
        value={guess}
        minLength={5}
        maxLength={5}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
