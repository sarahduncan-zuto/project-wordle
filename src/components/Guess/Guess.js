import { checkGuess } from "../../game-helpers";

function Guess({ numberOfTries, previousGuesses }) {
  const answer = "APPLE";
  const lastGuess = previousGuesses[previousGuesses.length - 1];
  const lastGuessResult = lastGuess ? checkGuess(lastGuess.guess, answer) : [];
  const isFullGuessCorrect =
    lastGuessResult.length === 5 &&
    lastGuessResult.every((r) => r.status === "correct");

  const isGameOver =
    isFullGuessCorrect || previousGuesses.length >= numberOfTries;

  return (
    <>
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

      {isFullGuessCorrect && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>{previousGuesses.length} guesses</strong>.
          </p>
        </div>
      )}

      {!isFullGuessCorrect && previousGuesses.length >= numberOfTries && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default Guess;
