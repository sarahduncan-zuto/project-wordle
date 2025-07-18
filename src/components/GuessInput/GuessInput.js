import React from "react";
import Guess from "../Guess/Guess";

function GuessInput() {
  const [guess, setGuess] = React.useState("");
  const [previousGuesses, setPreviousGuesses] = React.useState([]);
  const [numberOfTries, setNumberOfTries] = React.useState(6);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (guess.length !== 5) {
      alert("Guess must be exactly 5 letters long.");
      return;
    }

    const nextPreviousGuesses = [
      ...previousGuesses,
      { guess: guess, id: Math.random() },
    ];
    setPreviousGuesses(nextPreviousGuesses);
    setGuess("");
  };

  return (
    <>
      <div>
        Number of guesses left: <b>{numberOfTries - previousGuesses.length}</b>
      </div>
      <div>
        <Guess
          numberOfTries={numberOfTries}
          previousGuesses={previousGuesses}
        />
      </div>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter your guess:</label>
        <input
          type="text"
          id="guess-input"
          value={guess}
          minLength={5}
          maxLength={5}
          disabled={previousGuesses.length >= numberOfTries}
          onChange={(event) => {
            setGuess(event.target.value.toUpperCase());
          }}
        />
      </form>
    </>
  );
}

export default GuessInput;
