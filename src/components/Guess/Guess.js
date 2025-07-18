import React from "react";

function Guess({ numberOfTries, previousGuesses }) {
  return (
    <div className="guess-results">
      {[...Array(numberOfTries)].map((_, index) => {
        const guessObj = previousGuesses[index];
        const guessString = guessObj ? guessObj.guess : "";

        return (
          <p className="guess" key={index}>
            {guessString
              .padEnd(5)
              .split("")
              .map((letter, letterIndex) => {
                return (
                  <span key={letterIndex} className="cell">
                    {letter}
                  </span>
                );
              })}
          </p>
        );
      })}
    </div>
  );
}

export default Guess;
