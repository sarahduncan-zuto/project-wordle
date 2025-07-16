import React from "react";

function GuessInput() {
  const [guess, setGuess] = React.useState("");
  const [previousGuesses, setPreviousGuesses] = React.useState([]);

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
      <div>
        <h3>Previous guesses:</h3>
        <div>
          {previousGuesses.map((guess) => {
            return (
              <label key={guess.id} className="guess">
                {guess.guess}
              </label>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default GuessInput;
