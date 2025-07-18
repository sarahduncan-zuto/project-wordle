import { checkGuess } from "../../game-helpers";

function Guess({ numberOfTries, previousGuesses }) {
  const answer = "APPLE";

  return (
    <div className="guess-results">
      {[...Array(numberOfTries)].map((_, index) => {
        const guessObj = previousGuesses[index];
        const guessString = guessObj ? guessObj.guess : "";
        const guessResult = guessObj ? checkGuess(guessString, answer) : [];

        return (
          <p className="guess" key={index}>
            {guessString
              .padEnd(5)
              .split("")
              .map((letter, letterIndex) => {
                const status = guessResult[letterIndex]?.status || "";
                return (
                  <span key={letterIndex} className={`cell ${status}`}>
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
