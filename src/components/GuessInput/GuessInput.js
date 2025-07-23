import React from "react";
import Guess from "../Guess/Guess";
import GuessAttempt from "../GuessAttempt/GuessAttempt";

function GuessInput({ numberOfTries, setNumberOfTries }) {
  const [guess, setGuess] = React.useState("");
  const [previousGuesses, setPreviousGuesses] = React.useState([]);

  return (
    <>
      <GuessAttempt
        guess={guess}
        setGuess={setGuess}
        previousGuesses={previousGuesses}
        setPreviousGuesses={setPreviousGuesses}
        numberOfTries={numberOfTries}
      />
      <div>
        Number of guesses left: <b>{numberOfTries - previousGuesses.length}</b>
      </div>
      <div className="guess-wrapper">
        <Guess
          numberOfTries={numberOfTries}
          previousGuesses={previousGuesses}
        />
      </div>
    </>
  );
}

export default GuessInput;
