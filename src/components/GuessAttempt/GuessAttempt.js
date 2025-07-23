import React from "react";

function GuessAttempt({
  guess,
  setGuess,
  previousGuesses,
  setPreviousGuesses,
  numberOfTries,
}) {
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
  );
}

export default GuessAttempt;
